# CreateBasinRequest

## Example Usage

```typescript
import { CreateBasinRequest } from "@s2-dev/streamstore/models/components";

let value: CreateBasinRequest = {
  basin: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `basin`                                                          | *string*                                                         | :heavy_check_mark:                                               | Basin name.                                                      |
| `config`                                                         | [components.BasinConfig](../../models/components/basinconfig.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `scope`                                                          | *components.Scope*                                               | :heavy_minus_sign:                                               | N/A                                                              |