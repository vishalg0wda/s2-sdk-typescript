# Account
(*account*)

## Overview

Operate on an S2 account.

### Available Operations

* [listBasins](#listbasins)
* [getBasinConfig](#getbasinconfig)
* [createBasin](#createbasin)
* [deleteBasin](#deletebasin)
* [reconfigureBasin](#reconfigurebasin)

## listBasins

### Example Usage

```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await streamstore.account.listBasins({});

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StreamstoreCore } from "streamstore/core.js";
import { accountListBasins } from "streamstore/funcs/accountListBasins.js";

// Use `StreamstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const streamstore = new StreamstoreCore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountListBasins(streamstore, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBasinsRequest](../../models/operations/listbasinsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListBasinsResponse](../../models/operations/listbasinsresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## getBasinConfig

### Example Usage

```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await streamstore.account.getBasinConfig({
    basin: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StreamstoreCore } from "streamstore/core.js";
import { accountGetBasinConfig } from "streamstore/funcs/accountGetBasinConfig.js";

// Use `StreamstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const streamstore = new StreamstoreCore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountGetBasinConfig(streamstore, {
    basin: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBasinConfigRequest](../../models/operations/getbasinconfigrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BasinConfig](../../models/components/basinconfig.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## createBasin

### Example Usage

```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await streamstore.account.createBasin({
    basin: "<value>",
    createBasinRequest: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StreamstoreCore } from "streamstore/core.js";
import { accountCreateBasin } from "streamstore/funcs/accountCreateBasin.js";

// Use `StreamstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const streamstore = new StreamstoreCore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountCreateBasin(streamstore, {
    basin: "<value>",
    createBasinRequest: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBasinRequest](../../models/operations/createbasinrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BasinInfo](../../models/components/basininfo.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## deleteBasin

### Example Usage

```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  await streamstore.account.deleteBasin({
    basin: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StreamstoreCore } from "streamstore/core.js";
import { accountDeleteBasin } from "streamstore/funcs/accountDeleteBasin.js";

// Use `StreamstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const streamstore = new StreamstoreCore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountDeleteBasin(streamstore, {
    basin: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBasinRequest](../../models/operations/deletebasinrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## reconfigureBasin

### Example Usage

```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await streamstore.account.reconfigureBasin({
    basin: "<value>",
    reconfigureBasinRequest: {
      mask: [
        "<value>",
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StreamstoreCore } from "streamstore/core.js";
import { accountReconfigureBasin } from "streamstore/funcs/accountReconfigureBasin.js";

// Use `StreamstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const streamstore = new StreamstoreCore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountReconfigureBasin(streamstore, {
    basin: "<value>",
    reconfigureBasinRequest: {
      mask: [
        "<value>",
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReconfigureBasinRequest](../../models/operations/reconfigurebasinrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ReconfigureBasinResponse](../../models/components/reconfigurebasinresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |