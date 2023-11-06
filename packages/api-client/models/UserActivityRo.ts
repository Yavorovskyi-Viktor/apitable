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
* User Activity Ro
*/
export class UserActivityRo {
    /**
    * wizard id
    */
    'wizardId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "wizardId",
            "baseName": "wizardId",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return UserActivityRo.attributeTypeMap;
    }

    public constructor() {
    }
}

