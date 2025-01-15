# ReconfigureBasinRequest

Reconfigure basin request.

## Example Usage

```typescript
import { ReconfigureBasinRequest } from "streamstore/models/components";

let value: ReconfigureBasinRequest = {
  mask: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `config`                                                                                                                       | [components.BasinConfig](../../models/components/basinconfig.md)                                                               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `mask`                                                                                                                         | *string*[]                                                                                                                     | :heavy_check_mark:                                                                                                             | Specifies the pieces of configuration being updated.<br/>See <https://protobuf.dev/reference/protobuf/google.protobuf/#field-mask> |