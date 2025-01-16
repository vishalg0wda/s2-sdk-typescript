# GetStreamConfigRequest

## Example Usage

```typescript
import { GetStreamConfigRequest } from "streamstore/models/operations";

let value: GetStreamConfigRequest = {
  stream: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `stream`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | Name of the stream.                                                           |
| `s2Basin`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | Name of the basin. Use when accessing the basin through the Account Endpoint. |