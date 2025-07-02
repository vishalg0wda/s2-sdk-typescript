import { S2 } from "@s2-dev/streamstore";
import { ReadAcceptEnum } from "@s2-dev/streamstore/sdk/records";
import { discardSentinel, EventStream, ServerEvent } from "@s2-dev/streamstore/lib/event-streams";

// Helper to delay in an async function
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Create a ReadableStream that emits one chunk per interval
function createTimedStream(chunks: string[], intervalMs: number): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  return new ReadableStream<Uint8Array>({
    async start(controller) {
      for (const chunk of chunks) {
        console.log(`>>> Enqueuing chunk: ${chunk.trim()}`);
        controller.enqueue(encoder.encode(chunk));
        await delay(intervalMs);
      }
      console.log(">>> All chunks enqueued, closing stream");
      controller.close();
    },
  });
}

// Identity decoder: just returns the raw ServerEvent<string>
function id<T>(v: T): T {
  return v;
}

async function testEventStreamAndDiscardSentinel() {
  const chunks = [
    "data: foo\n\n",
    "data: bar\n\n",
    "data: [DONE]\n\n",  // sentinel — after this, everything is discarded
    "data: baz\n\n",     // should never reach the EventStream consumer
  ];

  // 1 chunk per second
  const rawStream = createTimedStream(chunks, 1_000);

  // drop everything at and after "[DONE]"
  const filtered = discardSentinel(rawStream, "[DONE]");

  // wrap in EventStream
  const es = new EventStream<ServerEvent<string>>({
    stream: filtered,
    decoder: id,
  });

  // consume
  for await (const evt of es) {
    console.log("⏳ Received event data:", evt.data);
  }

  console.log("✅ Stream finished (sentinel reached or source closed)");
}

const s2 = new S2({
  accessToken: "YAAAAAAAAABoYqMP8u0qiA1W5ckAhaZXDGVVHKi/36giuekR",
});

async function run() {
  // await testEventStreamAndDiscardSentinel();

  const result = await s2.records.read(
    {
      tailOffset: 20,
      stream: "test-session",
      s2Basin: "speakeasy-repro",
    },
    {
      acceptHeaderOverride: ReadAcceptEnum.textEventStream,
    }
  );

  if (Symbol.asyncIterator in result) {
    for await (const event of result) {
      console.log(event.event);
    }
  }
}

run();