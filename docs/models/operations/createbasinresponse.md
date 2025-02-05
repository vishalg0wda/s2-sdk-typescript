# CreateBasinResponse

## Example Usage

```typescript
import { CreateBasinResponse } from "@s2-dev/streamstore/models/operations";

let value: CreateBasinResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `basinInfo`                                                        | [components.BasinInfo](../../models/components/basininfo.md)       | :heavy_minus_sign:                                                 | N/A                                                                |