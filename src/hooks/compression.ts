import { RequestInput } from "../lib/http.js";
import { BeforeCreateRequestContext, BeforeCreateRequestHook } from "./types.js";

export class CompressionHook implements BeforeCreateRequestHook {
    beforeCreateRequest(_hookCtx: BeforeCreateRequestContext, input: RequestInput): RequestInput {
        const hdrs = new Headers(input.options?.headers ?? {});
        const body = input.options?.body;

        // We'll need to handle streaming requests differently (per message).
        // Currently we only handle unary JSON requests.
        if (!hdrs.get("content-type")?.toLowerCase().startsWith("application/json") || typeof body !== "string") {
            return input;
        }

        const stream = new Blob([body]).stream();
        const compressedStream = stream.pipeThrough(new CompressionStream("gzip"));

        // Set the content encoding.
        hdrs.set("content-encoding", "gzip");

        const opts = {
            ...input.options,
            body: compressedStream,
            headers: hdrs,
            duplex: "half", // use HTTP2 because of stream
        };

        return {
            ...input,
            options: opts,
        }
    }
}
