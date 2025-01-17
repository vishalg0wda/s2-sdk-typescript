# CheckTailRequest

## Example Usage

```typescript
import { CheckTailRequest } from "streamstore/models/operations";

let value: CheckTailRequest = {
  stream: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `stream`                                              | *string*                                              | :heavy_check_mark:                                    | Name of the stream.                                   |
| `s2Basin`                                             | *string*                                              | :heavy_minus_sign:                                    | Only required when basin is not part of the endpoint. |