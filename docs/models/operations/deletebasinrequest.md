# DeleteBasinRequest

## Example Usage

```typescript
import { DeleteBasinRequest } from "@s2-dev/streamstore/models/operations";

let value: DeleteBasinRequest = {
  basin: "<value>",
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `basin`                                                                                                                                                                           | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Basin name, which must be globally unique.<br/>The name must be between 8 and 48 characters, comprising lowercase<br/>letters, numbers and hyphens. It cannot begin or end with a hyphen. |