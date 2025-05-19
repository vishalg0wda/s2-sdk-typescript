import {
    BeforeCreateRequestContext,
    BeforeCreateRequestHook,
} from "./types.js";
import { RequestInput } from "../lib/http.js";

export class AddBasinToUrlHook implements BeforeCreateRequestHook {
    beforeCreateRequest(
        _hookCtx: BeforeCreateRequestContext,
        input: RequestInput,
    ): RequestInput {
        const headers = input.options?.headers;
        if (!headers) return input;

        const basinHeader = headers instanceof Headers 
            ? headers.get("s2-basin")
            : (headers as Record<string, string>)["s2-basin"];

        if (!basinHeader) return input;

        const url = new URL(input.url);
        if (!url.hostname.includes('.b.aws.s2.dev')) return input;

        url.hostname = `${basinHeader}.b.aws.s2.dev`;
        
        const remainingHeaders = headers instanceof Headers
            ? Object.fromEntries([...headers.entries()].filter(([key]) => key !== 's2-basin'))
            : Object.fromEntries(Object.entries(headers).filter(([key]) => key !== 's2-basin'));

        return {
            ...input,
            url,
            options: {
                ...input.options,
                headers: remainingHeaders,
            },
        };
    }
}
