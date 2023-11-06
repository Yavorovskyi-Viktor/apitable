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

import { DataSourceParam } from '../models/DataSourceParam';
import { HttpFile } from '../http/http';

export class AiUpdateParams {
    'name'?: string;
    'picture'?: string;
    'description'?: string;
    'type'?: string;
    'prologue'?: string;
    'prompt'?: string;
    'model'?: string;
    'setting'?: { [key: string]: any; };
    'dataSources'?: Array<DataSourceParam>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "picture",
            "baseName": "picture",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "prologue",
            "baseName": "prologue",
            "type": "string",
            "format": ""
        },
        {
            "name": "prompt",
            "baseName": "prompt",
            "type": "string",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "setting",
            "baseName": "setting",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "dataSources",
            "baseName": "dataSources",
            "type": "Array<DataSourceParam>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AiUpdateParams.attributeTypeMap;
    }

    public constructor() {
    }
}

