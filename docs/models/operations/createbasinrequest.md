# CreateBasinRequest

## Example Usage

```typescript
import { CreateBasinRequest } from "streamstore/models/operations";

let value: CreateBasinRequest = {
  basin: "<value>",
  createBasinRequest: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `basin`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Name of the basin.                                                             |
| `s2RequestToken`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createBasinRequest`                                                           | [components.CreateBasinRequest](../../models/components/createbasinrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |