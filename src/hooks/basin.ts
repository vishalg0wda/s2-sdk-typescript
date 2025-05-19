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
        const url = new URL(input.url);
        const basinHeader = (input.options?.headers as Record<string, string>)?.[
            "s2-basin"
        ];
        
        if (basinHeader && typeof basinHeader === 'string') {            
            const { "s2-basin": _, ...remainingHeaders } = input.options?.headers as Record<string, string> ?? {};
                        
            if (url.hostname.endsWith('.b.aws.s2.dev')) {
                url.hostname = `${basinHeader}.b.aws.s2.dev`;
            }

            return { ...input, url, options: { ...input.options, headers: remainingHeaders } };
        }        
        return input;
    }
}