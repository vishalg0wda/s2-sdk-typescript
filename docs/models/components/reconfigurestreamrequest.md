# ReconfigureStreamRequest

Reconfigure stream request.

## Example Usage

```typescript
import { ReconfigureStreamRequest } from "streamstore/models/components";

let value: ReconfigureStreamRequest = {
  mask: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `config`                                                                                                                       | [components.StreamConfig](../../models/components/streamconfig.md)                                                             | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `mask`                                                                                                                         | *string*[]                                                                                                                     | :heavy_check_mark:                                                                                                             | Specifies the pieces of configuration being updated.<br/>See <https://protobuf.dev/reference/protobuf/google.protobuf/#field-mask> |