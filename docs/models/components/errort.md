# ErrorT

## Example Usage

```typescript
import { ErrorT } from "@s2-dev/streamstore/models/components";

let value: ErrorT = {
  data: "<value>",
  event: "error",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `event`                                                                | [components.ReadEventEvent](../../models/components/readeventevent.md) | :heavy_check_mark:                                                     | N/A                                                                    |