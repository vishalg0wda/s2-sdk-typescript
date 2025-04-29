# StreamInfo

## Example Usage

```typescript
import { StreamInfo } from "@s2-dev/streamstore/models/components";

let value: StreamInfo = {
  createdAt: "1739735284610",
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `createdAt`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Creation time in seconds since Unix epoch.                                 |
| `deletedAt`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Deletion time in seconds since Unix epoch, if the stream is being deleted. |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Stream name.                                                               |