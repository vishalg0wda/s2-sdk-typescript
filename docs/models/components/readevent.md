# ReadEvent


## Supported Types

### `components.Batch`

```typescript
const value: components.Batch = {
  data: {
    records: [
      {
        seqNum: 634244,
        timestamp: 40328,
      },
    ],
  },
  event: "batch",
  id: "<id>",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  data: "<value>",
  event: "error",
};
```

### `components.Ping`

```typescript
const value: components.Ping = {
  data: {
    timestamp: 352303,
  },
  event: "ping",
};
```

