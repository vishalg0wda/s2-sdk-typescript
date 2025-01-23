# ListBasinsResponse

List basins response.

## Example Usage

```typescript
import { ListBasinsResponse } from "streamstore/models/components";

let value: ListBasinsResponse = {
  basins: [
    {
      cell: "<value>",
      name: "<value>",
      scope: "<value>",
      state: "deleting",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `basins`                                                                        | [components.BasinInfo](../../models/components/basininfo.md)[]                  | :heavy_check_mark:                                                              | Matching basins.                                                                |
| `hasMore`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | If set, indicates there are more results that can be listed with `start_after`. |