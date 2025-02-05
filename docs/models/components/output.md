# Output

Reply which can be a batch of records, or a sequence number if the request could not be satisfied.


## Supported Types

### `components.Batch`

```typescript
const value: components.Batch = {
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
        seqNum: 870013,
      },
    ],
  },
};
```

### `components.FirstSeqNum`

```typescript
const value: components.FirstSeqNum = {
  firstSeqNum: 978619,
};
```

### `components.NextSeqNum`

```typescript
const value: components.NextSeqNum = {
  nextSeqNum: 799159,
};
```

