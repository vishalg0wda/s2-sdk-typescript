# SequencedRecordBatch

A batch of sequenced records.

## Example Usage

```typescript
import { SequencedRecordBatch } from "@s2-dev/streamstore/models/components";

let value: SequencedRecordBatch = {
  records: [
    {
      body: "<value>",
      headers: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      seqNum: 461479,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `records`                                                                  | [components.SequencedRecord](../../models/components/sequencedrecord.md)[] | :heavy_check_mark:                                                         | Batch of sequenced records.                                                |