import { accountDeleteBasin } from "./funcs/accountDeleteBasin";
import { RequestOptions } from "./lib/sdks";
import { BasinConfig, BasinInfo, CheckTailResponse, CreateBasinRequest, CreateStreamRequest, StreamConfig, StreamInfo } from "./models/components";
import { NotFoundError } from "./models/errors";
import {    
    GetBasinConfigRequest,
    ListBasinsRequest,
    ListBasinsResponse,
    ListStreamsRequest,
    ListStreamsResponse,
    ReconfigureBasinRequest,
    CreateBasinRequest as CreateBasinRequestInner,
    CreateStreamRequest as CreateStreamRequestInner
} from "./models/operations";
import { PageIterator } from "./types";

import { Stream as InnerStream } from "./sdk/stream";
import { Basin as InnerBasin } from "./sdk/basin";
import { Account as InnerAccount } from "./sdk/account";

import { v4 } from 'uuid';
import { basinDeleteStream } from "./funcs/basinDeleteStream";

export function genS2RequestToken(): string {
    return v4().replace(/-/g, '');
}

export class S2Client {
    private authToken: string;
    private _account?: S2Account;
    get account(): S2Account {
        return (this._account ??= new S2Account(this.authToken));
    }

    private _basin?: S2Basin;
    basin(basinName: string): S2Basin {
        return (this._basin ??= new S2Basin(this.authToken, basinName));
    }

    constructor(authToken: string) {
        this.authToken = authToken;
    }
}

class S2Account {
    private _account: InnerAccount;
    private requestOptions: RequestOptions;

    constructor(authToken: string) {
        this._account = new InnerAccount({ bearerAuth: authToken });
        this.requestOptions = {
            timeoutMs: 3000,
            retries: {
                strategy: 'backoff',
                backoff: {
                    initialInterval: 100,
                    maxInterval: 3000,
                    exponent: 2,
                    maxElapsedTime: 6000,
                },
                retryConnectionErrors: true,
            },
            retryCodes: ['500', '503', '504'],
        };
    }

    /**
    * List basins.
    */
    async listBasins(
        request?: ListBasinsRequest,
    ): Promise<PageIterator<ListBasinsResponse, { cursor: string }>> {
        return this._account.listBasins(request ?? {}, this.requestOptions);
    }

    async getBasinConfig(basin: string): Promise<BasinConfig | undefined> {
        const _request: GetBasinConfigRequest = {
            basin,
        };
        return (await this._account.getBasinConfig(_request, this.requestOptions)).basinConfig;
    }

    async createBasin(basin: string, request?: CreateBasinRequest): Promise<BasinInfo | undefined> {
        const _request: CreateBasinRequestInner = {
            basin,
            s2RequestToken: genS2RequestToken(),
            createBasinRequest: request ?? {},
        };
        return (await this._account.createBasin(_request, this.requestOptions)).basinInfo;
    }

    async deleteBasin(basin: string, if_exists?: boolean): Promise<void | undefined> {
        const response = await accountDeleteBasin(this._account, { basin }, this.requestOptions);
        if (if_exists && response.error instanceof NotFoundError) return;
        if (response.error) throw new Error(response.error.message);
        return;
    }

    async reconfigureBasin(basin: string, config: BasinConfig): Promise<BasinConfig | undefined> {
        const _request: ReconfigureBasinRequest = {
            basin,
            basinConfig: config,
        };
        return (await this._account.reconfigureBasin(_request, this.requestOptions)).basinConfig;
    }
}

class S2Basin {
    private _basin: InnerBasin;
    private _stream!: Stream;
    private readonly basinURLSuffx = 'b.aws.s2.dev/v1alpha';
    private requestOptions: RequestOptions;
    private basinName: string;

    constructor(authToken: string, basinName: string) {
        this._basin = new InnerBasin({ bearerAuth: authToken });
        this.basinName = basinName;
        this.requestOptions = {
            timeoutMs: 3000,
            retries: {
                strategy: 'backoff',
                backoff: {
                    initialInterval: 100,
                    maxInterval: 3000,
                    exponent: 2,
                    maxElapsedTime: 6000,
                },
                retryConnectionErrors: true,
            },
            retryCodes: ['500', '503', '504'],
        };
    }

    stream(streamName: string): Stream {
        return (this._stream ??= new Stream(streamName, this.basinName));
    }

    async listStreams(
        request: ListStreamsRequest,
    ): Promise<PageIterator<ListStreamsResponse, { cursor: string }>> {
        const basinURL = `${this.basinName}.${this.basinURLSuffx}`;
        return this._basin.listStreams(request, { serverURL: basinURL, ...this.requestOptions });
    }

    async getStreamConfig(stream: string): Promise<StreamConfig | undefined> {
        const basinURL = `${this.basinName}.${this.basinURLSuffx}`;
        return (
            await this._basin.getStreamConfig({ stream }, { serverURL: basinURL, ...this.requestOptions })
        ).streamConfig;
    }

    async createStream(
        stream: string,
        request: CreateStreamRequest,
    ): Promise<StreamInfo | undefined> {
        const basinURL = `${this.basinName}.${this.basinURLSuffx}`;
        const _request: CreateStreamRequestInner = {
            stream,
            s2RequestToken: genS2RequestToken(),
            createStreamRequest: request,
        };

        return (
            await this._basin.createStream(_request, { serverURL: basinURL, ...this.requestOptions })
        ).streamInfo;
    }

    async deleteStream(stream: string, if_exists?: boolean): Promise<void | undefined> {
        const basinURL = `${this.basinName}.${this.basinURLSuffx}`;
        const response = await basinDeleteStream(this._basin, { stream }, { serverURL: basinURL, ...this.requestOptions });
        if (if_exists && response instanceof NotFoundError) return;
        if (response.error) throw new Error(response.error.message);
        return;        
    }

    async reconfigureStream(stream: string, config: StreamConfig): Promise<StreamConfig | undefined> {
        const basinURL = `${this.basinName}.${this.basinURLSuffx}`;
        return (
            await this._basin.reconfigureStream(
                { stream, streamConfig: config },
                { serverURL: basinURL, ...this.requestOptions },
            )
        ).streamConfig;
    }
}

class Stream {
    private _stream: InnerStream;
    private streamName: string;
    private basinName: string;
    private readonly basinURLSuffx = 'b.aws.s2.dev/v1alpha';

    constructor(streamName: string, basinName: string) {
        this.streamName = streamName;
        this.basinName = basinName;
        this._stream = new InnerStream();
    }

    async checkTail(): Promise<CheckTailResponse | undefined> {
        const basinURL = `${this.basinName}.${this.basinURLSuffx}`;
        return (await this._stream.checkTail({ stream: this.streamName }, { serverURL: basinURL }))
            .checkTailResponse;
    }
}
