<!-- Start SDK Example Usage [usage] -->
```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await s2.account.listBasins({});

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->