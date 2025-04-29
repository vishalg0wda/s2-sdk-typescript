# BasinReconfiguration

## Example Usage

```typescript
import { BasinReconfiguration } from "@s2-dev/streamstore/models/components";

let value: BasinReconfiguration = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `createStreamOnAppend`                                                               | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Create a stream on append.                                                           |
| `createStreamOnRead`                                                                 | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Create a stream on read.                                                             |
| `defaultStreamConfig`                                                                | [components.StreamReconfiguration](../../models/components/streamreconfiguration.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |