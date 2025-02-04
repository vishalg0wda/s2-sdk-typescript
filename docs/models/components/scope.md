# Scope

Basin scope. It should be formatted as "{cloud}:{region}", e.g. "aws:us-east-1".

## Example Usage

```typescript
import { Scope } from "@s2-dev/streamstore/models/components";

let value: Scope = {
  scope: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `scope`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | Basin scope. It should be formatted as "{cloud}:{region}", e.g. "aws:us-east-1". |