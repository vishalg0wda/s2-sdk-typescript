# CreateStreamRequest

## Example Usage

```typescript
import { CreateStreamRequest } from "streamstore/models/operations";

let value: CreateStreamRequest = {
  stream: "<value>",
  createStreamRequest: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `stream`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Name of the stream.                                                              |
| `s2RequestToken`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `createStreamRequest`                                                            | [components.CreateStreamRequest](../../models/components/createstreamrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |