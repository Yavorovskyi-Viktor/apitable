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
* Field Permission Properties
*/
export class FieldControlProp {
    /**
    * Allow collection table access
    */
    'formSheetAccessible': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "formSheetAccessible",
            "baseName": "formSheetAccessible",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FieldControlProp.attributeTypeMap;
    }

    public constructor() {
    }
}

