# SequencedRecord

Record that is durably sequenced on a stream.

## Example Usage

```typescript
import { SequencedRecord } from "@s2-dev/streamstore/models/components";

let value: SequencedRecord = {
  seqNum: 178823,
  timestamp: 439665,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `body`                                      | *string*                                    | :heavy_minus_sign:                          | Body of the record.                         |
| `headers`                                   | *string*[][]                                | :heavy_minus_sign:                          | Series of name-value pairs for this record. |
| `seqNum`                                    | *number*                                    | :heavy_check_mark:                          | N/A                                         |
| `timestamp`                                 | *number*                                    | :heavy_check_mark:                          | N/A                                         |