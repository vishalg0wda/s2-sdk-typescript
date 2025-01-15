# StreamInfo

Stream information.

## Example Usage

```typescript
import { StreamInfo } from "streamstore/models/components";

let value: StreamInfo = {
  createdAt: 568045,
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `createdAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | Creation time in seconds since Unix epoch.                                 |
| `deletedAt`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | Deletion time in seconds since Unix epoch, if the stream is being deleted. |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Stream name.                                                               |