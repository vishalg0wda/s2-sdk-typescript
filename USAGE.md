<!-- Start SDK Example Usage [usage] -->
```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await s2.accessTokens.listAccessTokens({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->