# Limit

Limit on how many records can be returned upto a maximum of 1000, or 1MiB of metered bytes.

## Example Usage

```typescript
import { Limit } from "@s2-dev/streamstore/models/operations";

let value: Limit = {};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `bytes`              | *number*             | :heavy_minus_sign:   | Metered bytes limit. |
| `count`              | *number*             | :heavy_minus_sign:   | Record count limit.  |