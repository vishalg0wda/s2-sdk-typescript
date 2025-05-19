# CreateOrReconfigureStreamRequest

## Example Usage

```typescript
import { CreateOrReconfigureStreamRequest } from "@s2-dev/streamstore/models/operations";

let value: CreateOrReconfigureStreamRequest = {
  stream: "<value>",
  s2Basin: "<value>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | Stream name, which must be unique within the basin.<br/>It can be an arbitrary string up to 512 characters. |
| `s2RequestToken`                                                                                        | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Provide a client request token header for idempotent retry behaviour.                                   |
| `s2Basin`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | Basin name for basin-specific endpoints                                                                 |
| `streamConfig`                                                                                          | [components.StreamConfig](../../models/components/streamconfig.md)                                      | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |