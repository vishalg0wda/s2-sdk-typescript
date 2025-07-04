/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const Operation = {
  ListBasins: "list-basins",
  CreateBasin: "create-basin",
  DeleteBasin: "delete-basin",
  ReconfigureBasin: "reconfigure-basin",
  GetBasinConfig: "get-basin-config",
  IssueAccessToken: "issue-access-token",
  RevokeAccessToken: "revoke-access-token",
  ListAccessTokens: "list-access-tokens",
  ListStreams: "list-streams",
  CreateStream: "create-stream",
  DeleteStream: "delete-stream",
  GetStreamConfig: "get-stream-config",
  ReconfigureStream: "reconfigure-stream",
  CheckTail: "check-tail",
  Append: "append",
  Read: "read",
  Trim: "trim",
  Fence: "fence",
  AccountMetrics: "account-metrics",
  BasinMetrics: "basin-metrics",
  StreamMetrics: "stream-metrics",
} as const;
export type Operation = ClosedEnum<typeof Operation>;

/** @internal */
export const Operation$inboundSchema: z.ZodNativeEnum<typeof Operation> = z
  .nativeEnum(Operation);

/** @internal */
export const Operation$outboundSchema: z.ZodNativeEnum<typeof Operation> =
  Operation$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Operation$ {
  /** @deprecated use `Operation$inboundSchema` instead. */
  export const inboundSchema = Operation$inboundSchema;
  /** @deprecated use `Operation$outboundSchema` instead. */
  export const outboundSchema = Operation$outboundSchema;
}
