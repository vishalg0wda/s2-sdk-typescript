# Three

Sequence number for the next record on this stream, in case the requested `start_seq_num` was larger.
If returned in a streaming read session, this will be a terminal reply.

## Example Usage

```typescript
import { Three } from "streamstore/models/components";

let value: Three = {
  nextSeqNum: 778157,
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nextSeqNum`                                                                                                                                                                  | *number*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | Sequence number for the next record on this stream, in case the requested `start_seq_num` was larger.<br/>If returned in a streaming read session, this will be a terminal reply. |