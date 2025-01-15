# StreamConfig

Stream configuration.

## Example Usage

```typescript
import { StreamConfig } from "streamstore/models/components";

let value: StreamConfig = {
  storageClass: 963663,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `retentionPolicy`                                                              | *components.RetentionPolicy*                                                   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `storageClass`                                                                 | *number*                                                                       | :heavy_check_mark:                                                             | Storage class for recent writes. This is the main cost:performance knob in S2. |