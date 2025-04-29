# ListAccessTokensResponse

## Example Usage

```typescript
import { ListAccessTokensResponse } from "@s2-dev/streamstore/models/components";

let value: ListAccessTokensResponse = {
  hasMore: false,
  tokens: [
    {
      id: "<id>",
      scope: {},
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `hasMore`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | If set, indicates there are more results that can be listed with `start_after`. |
| `tokens`                                                                        | [components.AccessTokenInfo](../../models/components/accesstokeninfo.md)[]      | :heavy_check_mark:                                                              | Access tokens information.                                                      |