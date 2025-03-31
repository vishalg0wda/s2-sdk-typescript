# ReconfigureStreamRequest

## Example Usage

```typescript
import { ReconfigureStreamRequest } from "@s2-dev/streamstore/models/operations";

let value: ReconfigureStreamRequest = {
  stream: "<value>",
  streamConfig: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `stream`                                                           | *string*                                                           | :heavy_check_mark:                                                 | Name of the stream.                                                |
| `streamConfig`                                                     | [components.StreamConfig](../../models/components/streamconfig.md) | :heavy_check_mark:                                                 | N/A                                                                |