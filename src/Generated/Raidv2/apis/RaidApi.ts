/* tslint:disable */
/* eslint-disable */
/**
 * RAID v2 API
 * This file is where all the endpoint paths are defined, it\'s the \"top level\' of the OpenAPI definition that links all the different files together. The `3.0` in the filename refers to this file being based on OpenAPI 3.0  as opposed to OpenAPI 3.1, which the tooling doesn\'t support yet. The `2.0.0` in the version field refers to the fact that there\'s already  a `1.0.0` used for the legacy RAiD application. Note that swagger ui doesn\'t currently work with our spec,  see https://github.com/swagger-api/swagger-ui/issues/7724 But the spec works fine with openapi-generator tooling. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: contact@raid.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ClosedRaid,
  RaidChange,
  RaidCreateRequest,
  RaidDto,
  RaidUpdateRequest,
  ValidationFailureResponse,
} from '../models/index';
import {
    ClosedRaidFromJSON,
    ClosedRaidToJSON,
    RaidChangeFromJSON,
    RaidChangeToJSON,
    RaidCreateRequestFromJSON,
    RaidCreateRequestToJSON,
    RaidDtoFromJSON,
    RaidDtoToJSON,
    RaidUpdateRequestFromJSON,
    RaidUpdateRequestToJSON,
    ValidationFailureResponseFromJSON,
    ValidationFailureResponseToJSON,
} from '../models/index';

export interface FindAllRaidsRequest {
    servicePointId?: number;
    includeFields?: Array<string>;
}

export interface FindRaidByNameRequest {
    prefix: string;
    suffix: string;
    version?: number;
}

export interface MintRaidRequest {
    raidCreateRequest: RaidCreateRequest;
}

export interface RaidHistoryRequest {
    prefix: string;
    suffix: string;
}

export interface UpdateRaidRequest {
    prefix: string;
    suffix: string;
    raidUpdateRequest: RaidUpdateRequest;
}

/**
 * 
 */
export class RaidApi extends runtime.BaseAPI {

    /**
     * list raids
     */
    async findAllRaidsRaw(requestParameters: FindAllRaidsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RaidDto>>> {
        const queryParameters: any = {};

        if (requestParameters.servicePointId !== undefined) {
            queryParameters['servicePointId'] = requestParameters.servicePointId;
        }

        if (requestParameters.includeFields) {
            queryParameters['includeFields'] = requestParameters.includeFields.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/raid/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RaidDtoFromJSON));
    }

    /**
     * list raids
     */
    async findAllRaids(requestParameters: FindAllRaidsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RaidDto>> {
        const response = await this.findAllRaidsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read a raid, caller must be authorized
     */
    async findRaidByNameRaw(requestParameters: FindRaidByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RaidDto>> {
        if (requestParameters.prefix === null || requestParameters.prefix === undefined) {
            throw new runtime.RequiredError('prefix','Required parameter requestParameters.prefix was null or undefined when calling findRaidByName.');
        }

        if (requestParameters.suffix === null || requestParameters.suffix === undefined) {
            throw new runtime.RequiredError('suffix','Required parameter requestParameters.suffix was null or undefined when calling findRaidByName.');
        }

        const queryParameters: any = {};

        if (requestParameters.version !== undefined) {
            queryParameters['version'] = requestParameters.version;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/raid/{prefix}/{suffix}`.replace(`{${"prefix"}}`, encodeURIComponent(String(requestParameters.prefix))).replace(`{${"suffix"}}`, encodeURIComponent(String(requestParameters.suffix))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RaidDtoFromJSON(jsonValue));
    }

    /**
     * read a raid, caller must be authorized
     */
    async findRaidByName(requestParameters: FindRaidByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RaidDto> {
        const response = await this.findRaidByNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * mint a raid
     */
    async mintRaidRaw(requestParameters: MintRaidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RaidDto>> {
        if (requestParameters.raidCreateRequest === null || requestParameters.raidCreateRequest === undefined) {
            throw new runtime.RequiredError('raidCreateRequest','Required parameter requestParameters.raidCreateRequest was null or undefined when calling mintRaid.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/raid/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RaidCreateRequestToJSON(requestParameters.raidCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RaidDtoFromJSON(jsonValue));
    }

    /**
     * mint a raid
     */
    async mintRaid(requestParameters: MintRaidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RaidDto> {
        const response = await this.mintRaidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * A list of the changes to the raid
     */
    async raidHistoryRaw(requestParameters: RaidHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RaidChange>>> {
        if (requestParameters.prefix === null || requestParameters.prefix === undefined) {
            throw new runtime.RequiredError('prefix','Required parameter requestParameters.prefix was null or undefined when calling raidHistory.');
        }

        if (requestParameters.suffix === null || requestParameters.suffix === undefined) {
            throw new runtime.RequiredError('suffix','Required parameter requestParameters.suffix was null or undefined when calling raidHistory.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/raid/{prefix}/{suffix}/history`.replace(`{${"prefix"}}`, encodeURIComponent(String(requestParameters.prefix))).replace(`{${"suffix"}}`, encodeURIComponent(String(requestParameters.suffix))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RaidChangeFromJSON));
    }

    /**
     * A list of the changes to the raid
     */
    async raidHistory(requestParameters: RaidHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RaidChange>> {
        const response = await this.raidHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateRaidRaw(requestParameters: UpdateRaidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RaidDto>> {
        if (requestParameters.prefix === null || requestParameters.prefix === undefined) {
            throw new runtime.RequiredError('prefix','Required parameter requestParameters.prefix was null or undefined when calling updateRaid.');
        }

        if (requestParameters.suffix === null || requestParameters.suffix === undefined) {
            throw new runtime.RequiredError('suffix','Required parameter requestParameters.suffix was null or undefined when calling updateRaid.');
        }

        if (requestParameters.raidUpdateRequest === null || requestParameters.raidUpdateRequest === undefined) {
            throw new runtime.RequiredError('raidUpdateRequest','Required parameter requestParameters.raidUpdateRequest was null or undefined when calling updateRaid.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/raid/{prefix}/{suffix}`.replace(`{${"prefix"}}`, encodeURIComponent(String(requestParameters.prefix))).replace(`{${"suffix"}}`, encodeURIComponent(String(requestParameters.suffix))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RaidUpdateRequestToJSON(requestParameters.raidUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RaidDtoFromJSON(jsonValue));
    }

    /**
     */
    async updateRaid(requestParameters: UpdateRaidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RaidDto> {
        const response = await this.updateRaidRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
