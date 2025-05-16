# Batch

## Example Usage

```typescript
import { Batch } from "@s2-dev/streamstore/models/components";

let value: Batch = {
  data: {
    records: [
      {
        seqNum: 793742,
        timestamp: 773663,
      },
    ],
  },
  event: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [components.ReadBatch](../../models/components/readbatch.md) | :heavy_check_mark:                                           | N/A                                                          |
| `event`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |