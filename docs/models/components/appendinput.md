# AppendInput

Input for append requests.

## Example Usage

```typescript
import { AppendInput } from "streamstore/models/components";

let value: AppendInput = {
  records: [
    {
      body: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fencingToken`                                                                                                                                                                   | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | Enforce a fencing token which must have been previously set by a `fence` command record.                                                                                         |
| `matchSeqNum`                                                                                                                                                                    | *number*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | Enforce that the sequence number issued to the first record matches.                                                                                                             |
| `records`                                                                                                                                                                        | [components.AppendRecord](../../models/components/appendrecord.md)[]                                                                                                             | :heavy_check_mark:                                                                                                                                                               | Batch of records to append atomically, which must contain at least one record, and no more than 1000.<br/>The total size of a batch of records may not exceed 1MiB of metered bytes. |