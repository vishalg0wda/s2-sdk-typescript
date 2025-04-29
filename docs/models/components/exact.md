# Exact

Match only the resource with this exact name.
Use an empty string to match no resources.

## Example Usage

```typescript
import { Exact } from "@s2-dev/streamstore/models/components";

let value: Exact = {
  exact: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `exact`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | Match only the resource with this exact name.<br/>Use an empty string to match no resources. |