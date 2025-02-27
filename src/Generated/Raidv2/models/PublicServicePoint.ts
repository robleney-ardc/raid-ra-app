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

import { exists, mapValues } from '../runtime';
/**
 * data that non-authn users can see (do not leak email)
 * @export
 * @interface PublicServicePoint
 */
export interface PublicServicePoint {
    /**
     * 
     * @type {number}
     * @memberof PublicServicePoint
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof PublicServicePoint
     */
    name: string;
}

/**
 * Check if a given object implements the PublicServicePoint interface.
 */
export function instanceOfPublicServicePoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function PublicServicePointFromJSON(json: any): PublicServicePoint {
    return PublicServicePointFromJSONTyped(json, false);
}

export function PublicServicePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicServicePoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function PublicServicePointToJSON(value?: PublicServicePoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

