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
      if (event.event === "batch" && event.data?.records) {
        console.log("Event Details:");
        console.log(`  Type: batch`);
        console.log(`  ID: ${event.id}`);
        console.log(
          `  Records: ${event.data.records.map((r) => r.body).join(", ")}`
        );
      }

      if (event.event === "ping" && event.data?.timestamp) {
        const wait = Math.random() * 1000;
        await new Promise((resolve) => setTimeout(resolve, wait));
        console.log("Event Details:");
        console.log(`  Type: ping`);
        console.log(`  Work Duration: ${wait.toFixed(2)}ms`);

        const elapsed = Date.now() - event.data.timestamp;
        const delta = elapsed - wait;

        console.log("Timing:");
        console.log(`  Elapsed with work: ${elapsed.toFixed(2)}ms`);
        console.log(`  Elapsed without work: ${delta.toFixed(2)}ms`);
      }

      console.log("--------------------------------");
    }
  }
}

run();