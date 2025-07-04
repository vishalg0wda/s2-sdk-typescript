/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ReconfigureBasinRequest = {
  /**
   * Basin name.
   */
  basin: string;
  basinReconfiguration: components.BasinReconfiguration;
};

/** @internal */
export const ReconfigureBasinRequest$inboundSchema: z.ZodType<
  ReconfigureBasinRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  basin: z.string(),
  BasinReconfiguration: components.BasinReconfiguration$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "BasinReconfiguration": "basinReconfiguration",
  });
});

/** @internal */
export type ReconfigureBasinRequest$Outbound = {
  basin: string;
  BasinReconfiguration: components.BasinReconfiguration$Outbound;
};

/** @internal */
export const ReconfigureBasinRequest$outboundSchema: z.ZodType<
  ReconfigureBasinRequest$Outbound,
  z.ZodTypeDef,
  ReconfigureBasinRequest
> = z.object({
  basin: z.string(),
  basinReconfiguration: components.BasinReconfiguration$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    basinReconfiguration: "BasinReconfiguration",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReconfigureBasinRequest$ {
  /** @deprecated use `ReconfigureBasinRequest$inboundSchema` instead. */
  export const inboundSchema = ReconfigureBasinRequest$inboundSchema;
  /** @deprecated use `ReconfigureBasinRequest$outboundSchema` instead. */
  export const outboundSchema = ReconfigureBasinRequest$outboundSchema;
  /** @deprecated use `ReconfigureBasinRequest$Outbound` instead. */
  export type Outbound = ReconfigureBasinRequest$Outbound;
}

export function reconfigureBasinRequestToJSON(
  reconfigureBasinRequest: ReconfigureBasinRequest,
): string {
  return JSON.stringify(
    ReconfigureBasinRequest$outboundSchema.parse(reconfigureBasinRequest),
  );
}

export function reconfigureBasinRequestFromJSON(
  jsonString: string,
): SafeParseResult<ReconfigureBasinRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReconfigureBasinRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReconfigureBasinRequest' from JSON`,
  );
}
