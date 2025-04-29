# BasinInfo

## Example Usage

```typescript
import { BasinInfo } from "@s2-dev/streamstore/models/components";

let value: BasinInfo = {
  name: "<value>",
  scope: "aws:us-east-1",
  state: "creating",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | Basin name.                                                    |
| `scope`                                                        | [components.BasinScope](../../models/components/basinscope.md) | :heavy_check_mark:                                             | N/A                                                            |
| `state`                                                        | [components.BasinState](../../models/components/basinstate.md) | :heavy_check_mark:                                             | N/A                                                            |