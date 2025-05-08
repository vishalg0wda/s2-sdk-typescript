# RevokeAccessTokenRequest

## Example Usage

```typescript
import { RevokeAccessTokenRequest } from "@s2-dev/streamstore/models/operations";

let value: RevokeAccessTokenRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Access token ID.<br/>It must be unique to the account and between 1 and 96 characters. |