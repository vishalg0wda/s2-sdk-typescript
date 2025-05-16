# AppendRequest

## Example Usage

```typescript
import { AppendRequest } from "@s2-dev/streamstore/models/operations";

let value: AppendRequest = {
  stream: "<value>",
  appendInput: {
    records: [
      {},
    ],
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Stream name, which must be unique within the basin.<br/>It can be an arbitrary string up to 512 characters.       |
| `s2Format`                                                                                                        | [components.S2Format](../../models/components/s2format.md)                                                        | :heavy_minus_sign:                                                                                                | Recognized when the Content-Type is `application/json`.<br/>json: UTF-8 data<br/>json-binsafe: Base64-encoded binary data |
| `appendInput`                                                                                                     | [components.AppendInput](../../models/components/appendinput.md)                                                  | :heavy_check_mark:                                                                                                | N/A                                                                                                               |