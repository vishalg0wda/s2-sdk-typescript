# NextSeqNum

Sequence number for the next record on this stream, in case the requested `start_seq_num` was larger.
If returned in a streaming read session, this will be a terminal reply.

## Example Usage

```typescript
import { NextSeqNum } from "@s2-dev/streamstore/models/components";

let value: NextSeqNum = {
  nextSeqNum: 20218,
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nextSeqNum`                                                                                                                                                                  | *number*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | Sequence number for the next record on this stream, in case the requested `start_seq_num` was larger.<br/>If returned in a streaming read session, this will be a terminal reply. |