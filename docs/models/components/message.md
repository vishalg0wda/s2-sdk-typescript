# Message

## Example Usage

```typescript
import { Message } from "@s2-dev/streamstore/models/components";

let value: Message = {
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
  event: "message",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | *components.Output*                                                                                | :heavy_check_mark:                                                                                 | Reply which can be a batch of records, or a sequence number if the request could not be satisfied. |
| `event`                                                                                            | [components.Event](../../models/components/event.md)                                               | :heavy_check_mark:                                                                                 | N/A                                                                                                |