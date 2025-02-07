import { accountDeleteBasin } from "./funcs/accountDeleteBasin";
import {
    AppendOutput,
    BasinConfig,
    BasinInfo,
    CheckTailResponse,
    CreateBasinRequest,
    CreateStreamRequest,
    Output,
    ReadResponse,
    ReadResponseOutput,
    SequencedRecord,
    SequencedRecordBatch,
    StreamConfig,
    StreamInfo,
} from "./models/components";
import { ErrorResponse, NotFoundError } from "./models/errors";
import {
    GetBasinConfigRequest,
    ListBasinsRequest,
    ListBasinsResponse,
    ListStreamsRequest,
    ListStreamsResponse,
    ReconfigureBasinRequest,
    CreateBasinRequest as CreateBasinRequestInner,
    CreateStreamRequest as CreateStreamRequestInner,
    ReadRequest as ReadRequestInner,
    AppendRequest as AppendRequestInner,
} from "./models/operations";
import { PageIterator } from "./types";

import { Stream as InnerStream, ReadAcceptEnum } from "./sdk/stream";
import { Basin as InnerBasin } from "./sdk/basin";
import { Account as InnerAccount } from "./sdk/account";

import { v4 as uuidv4 } from "uuid";
import { basinDeleteStream } from "./funcs/basinDeleteStream";
import { EventStream } from "./lib/event-streams";
import { ClientKind, S2Cloud, S2Endpoints } from "./endpoints";

export type ReadRequest = Omit<ReadRequestInner, "stream">;
export type AppendRequest = Omit<AppendRequestInner, "stream">;
export type {
    GetBasinConfigRequest,
    ListBasinsRequest,
    ListBasinsResponse,
    ListStreamsRequest,
    ListStreamsResponse,
    ReconfigureBasinRequest,
} from "./models/operations";
export type {
    BasinConfig,
    BasinInfo,
    CheckTailResponse,
    CreateBasinRequest,
    CreateStreamRequest,
    Output,
    ReadResponse,
    StreamConfig,
    StreamInfo,
} from "./models/components";

export * from "./endpoints";

export type S2ClientConfig = {
    authToken?: string;
    requestTimeout?: number;
    endpoints?: S2Endpoints;
};

const defaultS2ClientConfig: S2ClientConfig = {
    requestTimeout: 3000,
    endpoints: S2Endpoints.forCloud(S2Cloud.Aws),
};

export class S2Client {
    private config: S2ClientConfig;
    private _account?: S2Account;
    get account(): S2Account {
        return (this._account ??= new S2Account(this.config));
    }

    private _basin?: S2Basin;
    basin(basinName: string): S2Basin {
        return (this._basin ??= new S2Basin(basinName, this.config));
    }

    constructor(config?: S2ClientConfig) {
        this.config = { ...defaultS2ClientConfig, ...config };
    }
}

class S2Account {
    private _account: InnerAccount;
    private config: S2ClientConfig;
    private readonly accountURLSuffx = "/v1alpha";

    constructor(config: S2ClientConfig) {
        this._account = new InnerAccount({
            ...(config.authToken !== undefined && { bearerAuth: config.authToken }),
            ...(config.requestTimeout !== undefined && { timeoutMs: config.requestTimeout })
        });
        this.config = config;
    }

    get URL(): string | undefined {
        if (!this.config.endpoints) return undefined;
        return `https://${ClientKind.toAuthority({ kind: "Account" }, this.config.endpoints)}${this.accountURLSuffx}`;
    }

    basin(basinName: string): S2Basin {
        return new S2Basin(basinName, this.config);
    }

    async listBasins(
        request?: ListBasinsRequest
    ): Promise<PageIterator<ListBasinsResponse, { cursor: string }>> {
        const url = this.URL;
        return this._account.listBasins(request ?? {}, url ? { serverURL: url } : {});
    }

    async getBasinConfig(basin: string): Promise<BasinConfig | undefined> {
        const _request: GetBasinConfigRequest = { basin };
        const url = this.URL;
        return (await this._account.getBasinConfig(_request
            , url ? { serverURL: url } : {}
        )).basinConfig;
    }

    async createBasin(basin: string, request?: CreateBasinRequest): Promise<BasinInfo | undefined> {
        const _request: CreateBasinRequestInner = {
            basin,
            s2RequestToken: genS2RequestToken(),
            createBasinRequest: request ?? {},
        };
        const url = this.URL;
        return (await this._account.createBasin(_request,
            url ? { serverURL: url } : {}
        )).basinInfo;
    }

    async deleteBasin(basin: string, if_exists?: boolean): Promise<void | undefined> {
        const url = this.URL;
        const response = await accountDeleteBasin(this._account, { basin }, url ? { serverURL: url } : {});
        if (if_exists && response.error instanceof NotFoundError) return;
        if (response.error) throw new Error(response.error.message);
        return;
    }

    async reconfigureBasin(basin: string, config: BasinConfig): Promise<BasinConfig | undefined> {
        const url = this.URL;
        const _request: ReconfigureBasinRequest = { basin, basinConfig: config };
        return (await this._account.reconfigureBasin(_request
            , url ? { serverURL: url } : {}
        )).basinConfig;
    }
}

class S2Basin {
    private _basin: InnerBasin;
    private _stream!: Stream;
    private basinName: string;
    private config: S2ClientConfig;
    private clientKind: ClientKind;
    private readonly basinURLSuffx = "/v1alpha";

    private get URL(): string {
        return `https://${ClientKind.toAuthority(this.clientKind, this.config.endpoints ?? S2Endpoints.forCloud(S2Cloud.Aws))}${this.basinURLSuffx}`;
    }

    constructor(basinName: string, config: S2ClientConfig) {
        this._basin = new InnerBasin({
            ...(config.authToken !== undefined && { bearerAuth: config.authToken }),
            ...(config.requestTimeout !== undefined && { timeoutMs: config.requestTimeout })
        });
        this.config = config;
        this.clientKind = { kind: "Basin" as const, basin: basinName };
        this.basinName = basinName;
    }

    stream(streamName: string): Stream {
        return (this._stream ??= new Stream(this.basinName, streamName, this.config));
    }

    async listStreams(
        request: ListStreamsRequest
    ): Promise<PageIterator<ListStreamsResponse, { cursor: string }>> {
        return this._basin.listStreams(request, { serverURL: this.URL });
    }

    async getStreamConfig(stream: string): Promise<StreamConfig | undefined> {
        return (
            await this._basin.getStreamConfig({ stream }, { serverURL: this.URL })
        ).streamConfig;
    }

    async createStream(stream: string, request?: CreateStreamRequest): Promise<StreamInfo | undefined> {
        const _request: CreateStreamRequestInner = {
            stream,
            s2RequestToken: genS2RequestToken(),
            createStreamRequest: request ?? {},
        };
        return (
            await this._basin.createStream(_request, { serverURL: this.URL })
        ).streamInfo;
    }

    async deleteStream(stream: string, if_exists?: boolean): Promise<void | undefined> {
        const response = await basinDeleteStream(this._basin, { stream }, {
            serverURL: this.URL,
        });
        if (if_exists && response instanceof NotFoundError) return;
        if (response.error) throw new Error(response.error.message);
        return;
    }

    async reconfigureStream(stream: string, config: StreamConfig): Promise<StreamConfig | undefined> {
        return (
            await this._basin.reconfigureStream(
                { stream, streamConfig: config },
                { serverURL: this.URL }
            )
        ).streamConfig;
    }
}

class Stream {
    private _stream: InnerStream;
    private streamName: string;
    private config: S2ClientConfig;
    private clientKind: ClientKind;
    private readonly basinURLSuffx = "/v1alpha";

    private get basinURL(): string {
        return `https://${ClientKind.toAuthority(this.clientKind, this.config.endpoints ?? S2Endpoints.forCloud(S2Cloud.Aws))}${this.basinURLSuffx}`;
    }

    constructor(basinName: string, streamName: string, config: S2ClientConfig) {
        this.config = config;
        this.clientKind = { kind: "Basin" as const, basin: basinName };
        this.streamName = streamName;
        this._stream = new InnerStream({
            ...(config.authToken !== undefined && { bearerAuth: config.authToken }),
            ...(config.requestTimeout !== undefined && { timeoutMs: config.requestTimeout })
        });
    }

    async checkTail(): Promise<CheckTailResponse | undefined> {
        return (
            await this._stream.checkTail({ stream: this.streamName }, { serverURL: this.basinURL })
        ).checkTailResponse;
    }

    async append(request: AppendRequest): Promise<AppendOutput | undefined> {
        return (
            await this._stream.append({ ...request, stream: this.streamName }, { serverURL: this.basinURL })
        ).appendOutput;
    }

    async read(request: ReadRequest): Promise<Output | undefined> {
        return (
            await this._stream.read({ ...request, stream: this.streamName }, { serverURL: this.basinURL })
        ).output;
    }

    async *readStream(request: ReadRequest): AsyncGenerator<ReadResponse, void, undefined> {
        let currentRequest: ReadRequest = { ...request };
        let backoffMs = 100;
        const maxBackoffMs = 5000;
        const maxRetries = 5;
        let retryCount = 0;

        while (true) {
            let stream: EventStream<ReadResponse> | undefined;
            try {
                const response = await this._stream.read(
                    { ...currentRequest, stream: this.streamName },
                    {
                        serverURL: this.basinURL,
                        timeoutMs: -1, // disable only for streaming
                        acceptHeaderOverride: ReadAcceptEnum.textEventStream
                    }
                );
                stream = response.readResponse;
                if (!stream) return;

                for await (const event of stream) {
                    yield event;

                    if (event.event === 'message') {
                        const output = event as ReadResponseOutput;
                        if ('batch' in output.data) {
                            const batch = output.data.batch;
                            if (batch.records && batch.records.length > 0) {
                                const lastRecord = batch.records[batch.records.length - 1];
                                if (lastRecord) {
                                    currentRequest = { ...currentRequest, startSeqNum: lastRecord.seqNum + 1 };
                                }
                            }
                            if (currentRequest.limit) {
                                if (currentRequest.limit.count != null) {
                                    currentRequest.limit.count = Math.max(0, currentRequest.limit.count - batch.records.length);
                                }
                                if (currentRequest.limit.bytes != null) {
                                    currentRequest.limit.bytes = Math.max(0, currentRequest.limit.bytes - meteredBatchSize(batch));
                                }
                            }
                        }
                    }
                }
                return;
            } catch (error) {
                if (error instanceof ErrorResponse || error instanceof NotFoundError) return;
                if (retryCount >= maxRetries) {
                    throw error;
                }
                retryCount++;
                await new Promise(resolve => setTimeout(resolve, backoffMs));
                backoffMs = Math.min(backoffMs * 2, maxBackoffMs);
            }
        }
    }
}

function meteredRecordSize(batch: SequencedRecord): number {
    const fixed = 8 + (2 * batch.headers.length);
    const headerSize = batch.headers.reduce((acc, header) => acc + header.name.length + header.value.length, 0);
    const bodySize = batch.body.length;

    return fixed + headerSize + bodySize;
}

function meteredBatchSize(batch: SequencedRecordBatch): number {
    return batch.records.reduce((acc, record) => acc + meteredRecordSize(record), 0);
}

export function genS2RequestToken(): string {
    return uuidv4().replace(/-/g, "");
}