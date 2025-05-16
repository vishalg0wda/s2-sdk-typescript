# TailResponse

## Example Usage

```typescript
import { TailResponse } from "@s2-dev/streamstore/models/components";

let value: TailResponse = {
  tail: {
    seqNum: 478866,
    timestamp: 414821,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `tail`                                                                 | [components.StreamPosition](../../models/components/streamposition.md) | :heavy_check_mark:                                                     | Position of a record in a stream.                                      |