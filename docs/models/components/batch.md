# Batch

Batch of records.
This batch can be empty only if a `ReadLimit` was provided in the associated read request, but the first record
that could have been returned would violate the limit.

## Example Usage

```typescript
import { Batch } from "@s2-dev/streamstore/models/components";

let value: Batch = {
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
        seqNum: 461479,
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `batch`                                                                            | [components.SequencedRecordBatch](../../models/components/sequencedrecordbatch.md) | :heavy_check_mark:                                                                 | A batch of sequenced records.                                                      |