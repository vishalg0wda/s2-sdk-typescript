# AppendOutput

Output from append response.

## Example Usage

```typescript
import { AppendOutput } from "streamstore/models/components";

let value: AppendOutput = {
  endSeqNum: 118274,
  nextSeqNum: 639921,
  startSeqNum: 143353,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `endSeqNum`                                                                                                                     | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | Sequence number of last record appended + 1.<br/>`end_seq_num - start_seq_num` will be the number of records in the batch.      |
| `nextSeqNum`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | Sequence number of last durable record on the stream + 1.<br/>This can be greater than `end_seq_num` in case of concurrent appends. |
| `startSeqNum`                                                                                                                   | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | Sequence number of first record appended.                                                                                       |