# AppendRecord

Record to be appended to a stream.

## Example Usage

```typescript
import { AppendRecord } from "@s2-dev/streamstore/models/components";

let value: AppendRecord = {
  body: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `body`                                      | *string*                                    | :heavy_check_mark:                          | Body of this record.                        |
| `headers`                                   | *string*[][]                                | :heavy_minus_sign:                          | Series of name-value pairs for this record. |