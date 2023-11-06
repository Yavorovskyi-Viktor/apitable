/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Third party integrated tenant environment configuration view
*/
export class SocialTenantEnvVo {
    /**
    * Domain name
    */
    'domainName'?: string;
    /**
    * Tenant Integration Environment Collection
    */
    'envs'?: { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "domainName",
            "baseName": "domainName",
            "type": "string",
            "format": ""
        },
        {
            "name": "envs",
            "baseName": "envs",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SocialTenantEnvVo.attributeTypeMap;
    }

    public constructor() {
    }
}

