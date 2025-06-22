# ReadEvent


## Supported Types

### `components.Batch`

```typescript
const value: components.Batch = {
  data: {
    records: [
      {
        seqNum: 773663,
        timestamp: 695060,
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
    timestamp: 743406,
  },
  event: "ping",
};
```

