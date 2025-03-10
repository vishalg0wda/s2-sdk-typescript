# SequencedRecord

Record retrieved from a stream.

## Example Usage

```typescript
import { SequencedRecord } from "@s2-dev/streamstore/models/components";

let value: SequencedRecord = {
  body: "<value>",
  headers: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  seqNum: 944669,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `body`                                                   | *string*                                                 | :heavy_check_mark:                                       | Body of this record.                                     |
| `headers`                                                | [components.Header](../../models/components/header.md)[] | :heavy_check_mark:                                       | Series of name-value pairs for this record.              |
| `seqNum`                                                 | *number*                                                 | :heavy_check_mark:                                       | Sequence number for this record.                         |