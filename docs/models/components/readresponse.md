# ReadResponse


## Supported Types

### `components.Message`

```typescript
const value: components.Message = {
  data: {
    batch: {
      records: [
        {
          body: "<value>",
          headers: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          seqNum: 944669,
        },
      ],
    },
  },
  event: "message",
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
  event: "ping",
};
```

