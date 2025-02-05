# GetBasinConfigResponse

## Example Usage

```typescript
import { GetBasinConfigResponse } from "@s2-dev/streamstore/models/operations";

let value: GetBasinConfigResponse = {
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
| `basinConfig`                                                      | [components.BasinConfig](../../models/components/basinconfig.md)   | :heavy_minus_sign:                                                 | N/A                                                                |