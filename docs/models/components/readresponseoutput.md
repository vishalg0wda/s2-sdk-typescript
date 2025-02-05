# ReadResponseOutput

## Example Usage

```typescript
import { ReadResponseOutput } from "@s2-dev/streamstore/models/components";

let value: ReadResponseOutput = {
  data: {
    firstSeqNum: 925597,
  },
  event: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | *components.Output*                                                                                | :heavy_check_mark:                                                                                 | Reply which can be a batch of records, or a sequence number if the request could not be satisfied. |
| `event`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |