# One

Age in seconds for automatic trimming of records older than this threshold.
If set to 0, the stream will have infinite retention.

## Example Usage

```typescript
import { One } from "@s2-dev/streamstore/models/components";

let value: One = {
  age: 7,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `age`                                                                                                                             | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | Age in seconds for automatic trimming of records older than this threshold.<br/>If set to 0, the stream will have infinite retention. |