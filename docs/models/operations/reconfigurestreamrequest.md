# ReconfigureStreamRequest

## Example Usage

```typescript
import { ReconfigureStreamRequest } from "streamstore/models/operations";

let value: ReconfigureStreamRequest = {
  stream: "<value>",
  reconfigureStreamRequest: {
    mask: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `stream`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | Name of the stream.                                                                        |
| `s2Basin`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Name of the basin.                                                                         |
| `reconfigureStreamRequest`                                                                 | [components.ReconfigureStreamRequest](../../models/components/reconfigurestreamrequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |