# Account
(*account*)

## Overview

Operate on an S2 account.

### Available Operations

* [listBasins](#listbasins) - List basins.
* [getBasinConfig](#getbasinconfig) - Get basin configuration.
* [createBasin](#createbasin) - Create a new basin.
* [deleteBasin](#deletebasin) - Delete a basin.
* [reconfigureBasin](#reconfigurebasin) - Update basin configuration.

## listBasins

List basins.

### Example Usage

```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await s2.account.listBasins({});

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
import { S2Core } from "@s2-dev/streamstore/core.js";
import { accountListBasins } from "@s2-dev/streamstore/funcs/accountListBasins.js";

// Use `S2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const s2 = new S2Core({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountListBasins(s2, {});

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
| errors.ErrorResponse | 400, 401             | application/json     |
| errors.ErrorResponse | 500                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## getBasinConfig

Get basin configuration.

### Example Usage

```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await s2.account.getBasinConfig({
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
import { S2Core } from "@s2-dev/streamstore/core.js";
import { accountGetBasinConfig } from "@s2-dev/streamstore/funcs/accountGetBasinConfig.js";

// Use `S2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const s2 = new S2Core({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountGetBasinConfig(s2, {
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
| errors.ErrorResponse | 400, 401, 404        | application/json     |
| errors.ErrorResponse | 500                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## createBasin

Create a new basin.

### Example Usage

```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await s2.account.createBasin({
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
import { S2Core } from "@s2-dev/streamstore/core.js";
import { accountCreateBasin } from "@s2-dev/streamstore/funcs/accountCreateBasin.js";

// Use `S2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const s2 = new S2Core({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountCreateBasin(s2, {
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
| errors.ErrorResponse | 400, 401, 409        | application/json     |
| errors.ErrorResponse | 500                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## deleteBasin

Delete a basin.

### Example Usage

```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  await s2.account.deleteBasin({
    basin: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { S2Core } from "@s2-dev/streamstore/core.js";
import { accountDeleteBasin } from "@s2-dev/streamstore/funcs/accountDeleteBasin.js";

// Use `S2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const s2 = new S2Core({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountDeleteBasin(s2, {
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
| errors.ErrorResponse | 400, 401, 404        | application/json     |
| errors.ErrorResponse | 500                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## reconfigureBasin

Update basin configuration.

### Example Usage

```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await s2.account.reconfigureBasin({
    basin: "<value>",
    basinConfig: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { S2Core } from "@s2-dev/streamstore/core.js";
import { accountReconfigureBasin } from "@s2-dev/streamstore/funcs/accountReconfigureBasin.js";

// Use `S2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const s2 = new S2Core({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accountReconfigureBasin(s2, {
    basin: "<value>",
    basinConfig: {},
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

**Promise\<[components.BasinConfig](../../models/components/basinconfig.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 401, 404        | application/json     |
| errors.ErrorResponse | 500                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |