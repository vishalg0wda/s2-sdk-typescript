# BasinInfo

Basin information.

## Example Usage

```typescript
import { BasinInfo } from "@s2-dev/streamstore/models/components";

let value: BasinInfo = {
  cell: "<value>",
  name: "<value>",
  scope: "<value>",
  state: "deleting",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `cell`                                                         | *string*                                                       | :heavy_check_mark:                                             | Cell assignment.                                               |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | Basin name.                                                    |
| `scope`                                                        | *string*                                                       | :heavy_check_mark:                                             | Basin scope.                                                   |
| `state`                                                        | [components.BasinState](../../models/components/basinstate.md) | :heavy_check_mark:                                             | Current state of the basin.                                    |