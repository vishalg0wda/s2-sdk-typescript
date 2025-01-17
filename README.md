# streamstore

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *streamstore* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=streamstore&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/stream-store/s2). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

S2 API: Serverless API for streaming data backed by object storage.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [streamstore](#streamstore)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable      |
| ------------ | ---- | ----------- | ------------------------- |
| `bearerAuth` | http | HTTP Bearer | `STREAMSTORE_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [account](docs/sdks/account/README.md)

* [listBasins](docs/sdks/account/README.md#listbasins) - List basins.
* [getBasinConfig](docs/sdks/account/README.md#getbasinconfig) - Get basin configuration.
* [createBasin](docs/sdks/account/README.md#createbasin) - Create a new basin.
* [deleteBasin](docs/sdks/account/README.md#deletebasin) - Delete a basin.

### [basin](docs/sdks/basin/README.md)

* [listStreams](docs/sdks/basin/README.md#liststreams) - List Streams.
* [getStreamConfig](docs/sdks/basin/README.md#getstreamconfig) - Get stream configuration.
* [createStream](docs/sdks/basin/README.md#createstream) - Create a stream.
* [deleteStream](docs/sdks/basin/README.md#deletestream) - Delete a stream.

### [stream](docs/sdks/stream/README.md)

* [read](docs/sdks/stream/README.md#read) - Retrieve a batch of records.
* [append](docs/sdks/stream/README.md#append) - Append a batch of records.
* [checkTail](docs/sdks/stream/README.md#checktail) - Check the tail.


</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountCreateBasin`](docs/sdks/account/README.md#createbasin) - Create a new basin.
- [`accountDeleteBasin`](docs/sdks/account/README.md#deletebasin) - Delete a basin.
- [`accountGetBasinConfig`](docs/sdks/account/README.md#getbasinconfig) - Get basin configuration.
- [`accountListBasins`](docs/sdks/account/README.md#listbasins) - List basins.
- [`basinCreateStream`](docs/sdks/basin/README.md#createstream) - Create a stream.
- [`basinDeleteStream`](docs/sdks/basin/README.md#deletestream) - Delete a stream.
- [`basinGetStreamConfig`](docs/sdks/basin/README.md#getstreamconfig) - Get stream configuration.
- [`basinListStreams`](docs/sdks/basin/README.md#liststreams) - List Streams.
- [`streamAppend`](docs/sdks/stream/README.md#append) - Append a batch of records.
- [`streamCheckTail`](docs/sdks/stream/README.md#checktail) - Check the tail.
- [`streamRead`](docs/sdks/stream/README.md#read) - Retrieve a batch of records.

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

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
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await streamstore.account.listBasins({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `listBasins` method may throw the following errors:

| Error Type           | Status Code             | Content Type     |
| -------------------- | ----------------------- | ---------------- |
| errors.ErrorResponse | 400, 401, 403, 404, 409 | application/json |
| errors.ErrorResponse | 500                     | application/json |
| errors.APIError      | 4XX, 5XX                | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Streamstore } from "streamstore";
import { ErrorResponse, SDKValidationError } from "streamstore/models/errors";

const streamstore = new Streamstore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  let result;
  try {
    result = await streamstore.account.listBasins({});

    for await (const page of result) {
      // Handle the page
      console.log(page);
    }
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorResponse): {
        // Handle err.data$: ErrorResponseData
        console.error(err);
        return;
      }
      case (err instanceof ErrorResponse): {
        // Handle err.data$: ErrorResponseData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  serverURL: "https://aws.s2.dev/v1alpha",
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

### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:
```typescript
import { Streamstore } from "streamstore";

const streamstore = new Streamstore({
  bearerAuth: process.env["STREAMSTORE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await streamstore.basin.listStreams({}, {
    serverURL: "https://aws.s2.dev/v1alpha",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Streamstore } from "streamstore";
import { HTTPClient } from "streamstore/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Streamstore({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Streamstore } from "streamstore";

const sdk = new Streamstore({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `STREAMSTORE_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=streamstore&utm_campaign=typescript)
