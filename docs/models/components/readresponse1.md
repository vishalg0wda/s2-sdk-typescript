# ReadResponse1

## Example Usage

```typescript
import { ReadResponse1 } from "streamstore/models/components";

let value: ReadResponse1 = {
  data: {
    batch: {
      records: [
        {
          body: "<value>",
          headers: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          seqNum: 944669,
        },
      ],
    },
  },
  event: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | *components.Output*                                                                                | :heavy_check_mark:                                                                                 | Reply which can be a batch of records, or a sequence number if the request could not be satisfied. |
| `event`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |