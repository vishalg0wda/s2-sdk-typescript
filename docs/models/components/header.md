# Header

Headers add structured information to a record as name-value pairs.

## Example Usage

```typescript
import { Header } from "streamstore/models/components";

let value: Header = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | Header name blob.<br/>The name cannot be empty, with the exception of an S2 command record. |
| `value`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | Header value blob.                                                                      |