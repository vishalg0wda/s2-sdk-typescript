# StreamConfig

Stream configuration.

## Example Usage

```typescript
import { StreamConfig } from "streamstore/models/components";

let value: StreamConfig = {
  storageClass: "express",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `retentionPolicy`                                                  | *components.RetentionPolicy*                                       | :heavy_minus_sign:                                                 | N/A                                                                |
| `storageClass`                                                     | [components.StorageClass](../../models/components/storageclass.md) | :heavy_check_mark:                                                 | Storage class for recent writes.                                   |