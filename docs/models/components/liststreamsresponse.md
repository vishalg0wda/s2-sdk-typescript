# ListStreamsResponse

## Example Usage

```typescript
import { ListStreamsResponse } from "@s2-dev/streamstore/models/components";

let value: ListStreamsResponse = {
  hasMore: false,
  streams: [
    {
      createdAt: "<value>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `hasMore`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | If set, indicates there are more results that can be listed with `start_after`. |
| `streams`                                                                       | [components.StreamInfo](../../models/components/streaminfo.md)[]                | :heavy_check_mark:                                                              | Matching streams.                                                               |