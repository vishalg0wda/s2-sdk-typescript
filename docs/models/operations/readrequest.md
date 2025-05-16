# ReadRequest

## Example Usage

```typescript
import { ReadRequest } from "@s2-dev/streamstore/models/operations";

let value: ReadRequest = {
  stream: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Stream name, which must be unique within the basin.<br/>It can be an arbitrary string up to 512 characters.       |
| `s2Format`                                                                                                        | [components.S2Format](../../models/components/s2format.md)                                                        | :heavy_minus_sign:                                                                                                | Recognized when the Content-Type is `application/json`.<br/>json: UTF-8 data<br/>json-binsafe: Base64-encoded binary data |
| `seqNum`                                                                                                          | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Start from a sequence number.                                                                                     |
| `timestamp`                                                                                                       | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Start from a timestamp.                                                                                           |
| `tailOffset`                                                                                                      | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Start from number of records before the tail, i.e. before the next sequence number.                               |
| `count`                                                                                                           | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Limit total records to return.                                                                                    |
| `bytes`                                                                                                           | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Limit total metered bytes to return.                                                                              |