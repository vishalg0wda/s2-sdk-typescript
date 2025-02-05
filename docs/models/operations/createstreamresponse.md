# CreateStreamResponse

## Example Usage

```typescript
import { CreateStreamResponse } from "@s2-dev/streamstore/models/operations";

let value: CreateStreamResponse = {
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
| `streamInfo`                                                       | [components.StreamInfo](../../models/components/streaminfo.md)     | :heavy_minus_sign:                                                 | N/A                                                                |