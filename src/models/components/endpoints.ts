type Authority = string;

// Basin Name
type BasinName = string;

/**
 * S2 cloud environment to connect with.
 */
export enum S2Cloud {
    /** S2 running on AWS */
    Aws = "aws"
}

/**
 * Endpoint for connecting to an S2 basin.
 */
export enum BasinEndpointKind {
    ParentZone = "ParentZone",
    Direct = "Direct"
}

export type BasinEndpoint = {
    kind: BasinEndpointKind.ParentZone;
    authority: Authority;
} | {
    kind: BasinEndpointKind.Direct;
    authority: Authority;
};

class S2EndpointError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'S2EndpointError';
    }
}

/**
 * Endpoints for the S2 environment.
 * 
 * You can find the S2 endpoints in our [documentation](https://s2.dev/docs/interface/endpoints)
 */
export class S2Endpoints {
    /** Used by `AccountService` requests */
    public account: Authority;
    /** Used by `BasinService` and `StreamService` requests */
    public basin: BasinEndpoint;

    constructor(account: Authority, basin: BasinEndpoint) {
        this.account = account;
        this.basin = basin;
    }

    /**
     * Get S2 endpoints for the specified cloud.
     */
    static forCloud(cloud: S2Cloud): S2Endpoints {
        const authority = `${cloud}.s2.dev`;
        return new S2Endpoints(
            authority,
            {
                kind: BasinEndpointKind.ParentZone,
                authority: `b.${cloud}.s2.dev`
            }
        );
    }

    /**
     * Get S2 endpoints for the specified cell.
     */
    static forCell(cloud: S2Cloud, cellId: string): S2Endpoints {
        const cellEndpoint = `${cellId}.o.${cloud}.s2.dev`;
        return new S2Endpoints(
            cellEndpoint,
            {
                kind: BasinEndpointKind.Direct,
                authority: cellEndpoint
            }
        );
    }

    /**
     * Get S2 endpoints from environment variables.
     * 
     * The following environment variables are used:
     * - `S2_CLOUD`: Valid S2 cloud name. Defaults to AWS.
     * - `S2_ACCOUNT_ENDPOINT`: Overrides the account endpoint.
     * - `S2_BASIN_ENDPOINT`: Overrides the basin endpoint. The prefix `"{basin}."` indicates the
     *   basin endpoint is `ParentZone` else `Direct`.
     */
    static fromEnv(): S2Endpoints {
        let cloud: S2Cloud;
        try {
            const cloudEnv = process.env['S2_CLOUD'] || S2Cloud.Aws;
            if (Object.values(S2Cloud).includes(cloudEnv as S2Cloud)) {
                cloud = cloudEnv as S2Cloud;
            } else {
                throw new S2EndpointError(`Invalid S2_CLOUD: ${cloudEnv}`);
            }
        } catch (err) {
            const error = err as Error;
            throw new S2EndpointError(`Invalid S2_CLOUD: ${error.message}`);
        }

        const endpoints = S2Endpoints.forCloud(cloud);

        const accountEndpoint = process.env['S2_ACCOUNT_ENDPOINT'];
        if (accountEndpoint !== undefined) {
            if (typeof accountEndpoint !== 'string') {
                throw new S2EndpointError('Invalid S2_ACCOUNT_ENDPOINT: not string');
            }
            endpoints.account = accountEndpoint;
        }

        const basinEndpoint = process.env['S2_BASIN_ENDPOINT'];
        if (basinEndpoint !== undefined) {
            if (typeof basinEndpoint !== 'string') {
                throw new S2EndpointError('Invalid S2_BASIN_ENDPOINT: not string');
            }

            if (basinEndpoint.startsWith('{basin}.')) {
                const parentZone = basinEndpoint.substring(7);
                endpoints.basin = {
                    kind: BasinEndpointKind.ParentZone,
                    authority: parentZone
                };
            } else {
                endpoints.basin = {
                    kind: BasinEndpointKind.Direct,
                    authority: basinEndpoint
                };
            }
        }

        return endpoints;
    }
}

/**
 * Client kind for different S2 services
 */
export type ClientKind = 
    | { kind: 'Account' }
    | { kind: 'Basin'; basin: BasinName };

export const ClientKind = {
    toAuthority(kind: ClientKind, endpoints: S2Endpoints): Authority {
        switch (kind.kind) {
            case 'Account':
                return endpoints.account;
            case 'Basin':
                switch (endpoints.basin.kind) {
                    case BasinEndpointKind.ParentZone:
                        return `${kind.basin}.${endpoints.basin.authority}`;
                    case BasinEndpointKind.Direct:
                        return endpoints.basin.authority;
                }
        }
    }
};