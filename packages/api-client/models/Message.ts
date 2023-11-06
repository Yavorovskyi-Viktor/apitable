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

import { MessageItem } from '../models/MessageItem';
import { HttpFile } from '../http/http';

export class Message {
    'type'?: MessageTypeEnum;
    'data'?: MessageItem;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MessageTypeEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "MessageItem",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MessageTypeEnum {
    Human = 'human',
    Ai = 'ai'
}

