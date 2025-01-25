# Output

Reply which can be a batch of records, or a sequence number if the request could not be satisfied.


## Supported Types

### `components.Output1`

```typescript
const value: components.Output1 = {
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
        seqNum: 799159,
      },
    ],
  },
};
```

### `components.Output2`

```typescript
const value: components.Output2 = {
  firstSeqNum: 461479,
};
```

### `components.Three`

```typescript
const value: components.Three = {
  nextSeqNum: 780529,
};
```

