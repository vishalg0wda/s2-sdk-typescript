# BasinInfo

Basin information.

## Example Usage

```typescript
import { BasinInfo } from "streamstore/models/components";

let value: BasinInfo = {
  cell: "<value>",
  name: "<value>",
  scope: "<value>",
  state: 891773,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cell`             | *string*           | :heavy_check_mark: | Cell assignment.   |
| `name`             | *string*           | :heavy_check_mark: | Basin name.        |
| `scope`            | *string*           | :heavy_check_mark: | Basin scope.       |
| `state`            | *number*           | :heavy_check_mark: | Basin state.       |