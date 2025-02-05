# ListStreamsResponse

## Example Usage

```typescript
import { ListStreamsResponse } from "@s2-dev/streamstore/models/operations";

let value: ListStreamsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `listStreamsResponse`                                                            | [components.ListStreamsResponse](../../models/components/liststreamsresponse.md) | :heavy_minus_sign:                                                               | N/A                                                                              |