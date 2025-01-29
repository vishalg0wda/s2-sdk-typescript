# Output1

Batch of records.
This batch can be empty only if a `ReadLimit` was provided in the associated read request, but the first record
that could have been returned would violate the limit.

## Example Usage

```typescript
import { Output1 } from "@s2-dev/streamstore/models/components";

let value: Output1 = {
  batch: {
    records: [
      {
        body: "<value>",
        headers: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        seqNum: 978619,
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `batch`                                                                            | [components.SequencedRecordBatch](../../models/components/sequencedrecordbatch.md) | :heavy_check_mark:                                                                 | A batch of sequenced records.                                                      |