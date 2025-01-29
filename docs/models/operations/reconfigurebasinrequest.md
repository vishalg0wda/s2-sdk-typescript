# ReconfigureBasinRequest

## Example Usage

```typescript
import { ReconfigureBasinRequest } from "@s2-dev/streamstore/models/operations";

let value: ReconfigureBasinRequest = {
  basin: "<value>",
  basinConfig: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `basin`                                                          | *string*                                                         | :heavy_check_mark:                                               | Name of the basin.                                               |
| `basinConfig`                                                    | [components.BasinConfig](../../models/components/basinconfig.md) | :heavy_check_mark:                                               | N/A                                                              |