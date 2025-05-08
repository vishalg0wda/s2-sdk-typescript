# CheckTailResponse

## Example Usage

```typescript
import { CheckTailResponse } from "@s2-dev/streamstore/models/components";

let value: CheckTailResponse = {
  tail: {
    seqNum: 844206,
    timestamp: 245060,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `tail`                                                                 | [components.StreamPosition](../../models/components/streamposition.md) | :heavy_check_mark:                                                     | Position of a record in a stream.                                      |