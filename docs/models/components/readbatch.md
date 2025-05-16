# ReadBatch

## Example Usage

```typescript
import { ReadBatch } from "@s2-dev/streamstore/models/components";

let value: ReadBatch = {
  records: [
    {
      seqNum: 277716,
      timestamp: 3426,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `records`                                                                  | [components.SequencedRecord](../../models/components/sequencedrecord.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |