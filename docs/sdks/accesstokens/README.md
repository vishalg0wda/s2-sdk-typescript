# AccessTokens
(*accessTokens*)

## Overview

Manage access tokens

### Available Operations

* [listAccessTokens](#listaccesstokens) - List access tokens.
* [issueAccessToken](#issueaccesstoken) - Issue a new access token.
* [revokeAccessToken](#revokeaccesstoken) - Revoke an access token.

## listAccessTokens

List access tokens.

### Example Usage

```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await s2.accessTokens.listAccessTokens({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { S2Core } from "@s2-dev/streamstore/core.js";
import { accessTokensListAccessTokens } from "@s2-dev/streamstore/funcs/accessTokensListAccessTokens.js";

// Use `S2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const s2 = new S2Core({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accessTokensListAccessTokens(s2, {});

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
| `request`                                                                                                                                                                      | [operations.ListAccessTokensRequest](../../models/operations/listaccesstokensrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListAccessTokensResponse](../../models/components/listaccesstokensresponse.md)\>**

### Errors

| Error Type            | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.ErrorResponse  | 400, 401              | application/json      |
| errors.RetryableError | 499                   | application/json      |
| errors.RetryableError | 500, 503, 504         | application/json      |
| errors.APIError       | 4XX, 5XX              | \*/\*                 |

## issueAccessToken

Issue a new access token.

### Example Usage

```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await s2.accessTokens.issueAccessToken({
    id: "<id>",
    scope: {},
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
import { accessTokensIssueAccessToken } from "@s2-dev/streamstore/funcs/accessTokensIssueAccessToken.js";

// Use `S2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const s2 = new S2Core({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accessTokensIssueAccessToken(s2, {
    id: "<id>",
    scope: {},
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
| `request`                                                                                                                                                                      | [components.AccessTokenInfo](../../models/components/accesstokeninfo.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IssueAccessTokenResponse](../../models/components/issueaccesstokenresponse.md)\>**

### Errors

| Error Type            | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.ErrorResponse  | 400, 401              | application/json      |
| errors.RetryableError | 499                   | application/json      |
| errors.RetryableError | 500, 503, 504         | application/json      |
| errors.APIError       | 4XX, 5XX              | \*/\*                 |

## revokeAccessToken

Revoke an access token.

### Example Usage

```typescript
import { S2 } from "@s2-dev/streamstore";

const s2 = new S2({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  await s2.accessTokens.revokeAccessToken({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { S2Core } from "@s2-dev/streamstore/core.js";
import { accessTokensRevokeAccessToken } from "@s2-dev/streamstore/funcs/accessTokensRevokeAccessToken.js";

// Use `S2Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const s2 = new S2Core({
  bearerAuth: process.env["S2_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await accessTokensRevokeAccessToken(s2, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.RevokeAccessTokenRequest](../../models/operations/revokeaccesstokenrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type            | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.ErrorResponse  | 400, 401              | application/json      |
| errors.RetryableError | 499                   | application/json      |
| errors.RetryableError | 500, 503, 504         | application/json      |
| errors.APIError       | 4XX, 5XX              | \*/\*                 |