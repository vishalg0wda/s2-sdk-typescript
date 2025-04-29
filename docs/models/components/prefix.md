# Prefix

Match all resources that start with this prefix.
Use an empty string to match all resource.

## Example Usage

```typescript
import { Prefix } from "@s2-dev/streamstore/models/components";

let value: Prefix = {
  prefix: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `prefix`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | Match all resources that start with this prefix.<br/>Use an empty string to match all resource. |