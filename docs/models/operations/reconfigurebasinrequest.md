# ReconfigureBasinRequest

## Example Usage

```typescript
import { ReconfigureBasinRequest } from "@s2-dev/streamstore/models/operations";

let value: ReconfigureBasinRequest = {
  basin: "<value>",
  basinReconfiguration: {},
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `basin`                                                                                                                                                                           | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Basin name, which must be globally unique.<br/>The name must be between 8 and 48 characters, comprising lowercase<br/>letters, numbers and hyphens. It cannot begin or end with a hyphen. |
| `basinReconfiguration`                                                                                                                                                            | [components.BasinReconfiguration](../../models/components/basinreconfiguration.md)                                                                                                | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |