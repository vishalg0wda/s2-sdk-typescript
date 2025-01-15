# Assignment1

Basin scope. It should be formatted as "{cloud}:{region}", e.g. "aws:us-east-1".

## Example Usage

```typescript
import { Assignment1 } from "streamstore/models/components";

let value: Assignment1 = {
  scope: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `scope`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | Basin scope. It should be formatted as "{cloud}:{region}", e.g. "aws:us-east-1". |