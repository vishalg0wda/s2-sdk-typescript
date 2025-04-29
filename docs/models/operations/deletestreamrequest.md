# DeleteStreamRequest

## Example Usage

```typescript
import { DeleteStreamRequest } from "@s2-dev/streamstore/models/operations";

let value: DeleteStreamRequest = {
  stream: "<value>",
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                                                                      | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | Stream name, which must be unique within the basin.<br/>It can be an arbitrary string upto 512 characters.<br/>Backslash (`/`) is recommended as a delimiter for hierarchical naming. |