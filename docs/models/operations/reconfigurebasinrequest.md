# ReconfigureBasinRequest

## Example Usage

```typescript
import { ReconfigureBasinRequest } from "streamstore/models/operations";

let value: ReconfigureBasinRequest = {
  basin: "<value>",
  reconfigureBasinRequest: {
    config: {},
    mask: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `basin`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | Name of the basin.                                                                       |
| `reconfigureBasinRequest`                                                                | [components.ReconfigureBasinRequest](../../models/components/reconfigurebasinrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |