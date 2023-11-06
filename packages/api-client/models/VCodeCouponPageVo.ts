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
* Page view of V-code coupon template
*/
export class VCodeCouponPageVo {
    /**
    * Exchange coupon template ID
    */
    'templateId'?: number;
    /**
    * Exchange amount
    */
    'count'?: number;
    /**
    * Remarks
    */
    'comment'?: string;
    /**
    * Creator
    */
    'creator'?: string;
    /**
    * Create time
    */
    'createdAt'?: Date;
    /**
    * Last Modified By
    */
    'updater'?: string;
    /**
    * Last modified
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updater",
            "baseName": "updater",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return VCodeCouponPageVo.attributeTypeMap;
    }

    public constructor() {
    }
}

