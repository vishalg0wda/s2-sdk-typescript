# ListAccessTokensRequest

## Example Usage

```typescript
import { ListAccessTokensRequest } from "@s2-dev/streamstore/models/operations";

let value: ListAccessTokensRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `prefix`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | List access tokens that begin with this prefix.                       |
| `startAfter`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | Only return access tokens that lexicographically start after this ID. |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Number of results, up to a maximum of 1000.                           |