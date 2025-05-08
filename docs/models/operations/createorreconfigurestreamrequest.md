# CreateOrReconfigureStreamRequest

## Example Usage

```typescript
import { CreateOrReconfigureStreamRequest } from "@s2-dev/streamstore/models/operations";

let value: CreateOrReconfigureStreamRequest = {
  stream: "<value>",
  streamConfig: {
    timestamping: {},
  },
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                                                                      | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | Stream name, which must be unique within the basin.<br/>It can be an arbitrary string upto 512 characters.<br/>Backslash (`/`) is recommended as a delimiter for hierarchical naming. |
| `s2RequestToken`                                                                                                                                                              | *string*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                            | Provide a client request token header for idempotent retry behaviour.                                                                                                         |
| `streamConfig`                                                                                                                                                                | [components.StreamConfig](../../models/components/streamconfig.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                            | N/A                                                                                                                                                                           |