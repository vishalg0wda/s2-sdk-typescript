# AppendRequest

## Example Usage

```typescript
import { AppendRequest } from "streamstore/models/operations";

let value: AppendRequest = {
  stream: "<value>",
  appendInput: {
    records: [
      {
        body: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `s2Format`                                                            | *operations.HeaderS2Format*                                           | :heavy_minus_sign:                                                    | json: utf-8 plaintext data.<br/>json-binsafe: base64 encoded binary data. |
| `stream`                                                              | *string*                                                              | :heavy_check_mark:                                                    | Name of the stream.                                                   |
| `appendInput`                                                         | [components.AppendInput](../../models/components/appendinput.md)      | :heavy_check_mark:                                                    | N/A                                                                   |