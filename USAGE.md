<!-- Start SDK Example Usage [usage] -->
```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await streamstore.account.listBasins({});

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->