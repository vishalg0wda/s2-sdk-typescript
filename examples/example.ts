import { S2 } from "@s2-dev/streamstore";
import { ReadAcceptEnum } from "@s2-dev/streamstore/sdk/records";

const s2 = new S2({
  accessToken: "YAAAAAAAAABoYqMP8u0qiA1W5ckAhaZXDGVVHKi/36giuekR",
});

const oldConsoleLog = console.log.bind(console);

console.log = (...args: any[]) => {
  // Add a timestamp to the beginning of the message
  const timestamp = new Date().toISOString();
  oldConsoleLog(`[${timestamp}]`, ...args);
};

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