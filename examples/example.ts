import { S2 } from "@s2-dev/streamstore";
import { ReadAcceptEnum } from "@s2-dev/streamstore/sdk/records";

const s2 = new S2({
  accessToken: "YAAAAAAAAABoYqMP8u0qiA1W5ckAhaZXDGVVHKi/36giuekR",
});

async function run() {
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