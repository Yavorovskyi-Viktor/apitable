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
* Search Member Results View
*/
export class SearchMemberVo {
    /**
    * Member ID
    */
    'memberId'?: number;
    /**
    * Head portrait address
    */
    'avatar'?: string;
    /**
    * Member Name
    */
    'memberName'?: string;
    /**
    * Member name (not highlighted)
    */
    'originName'?: string;
    /**
    * Department
    */
    'team'?: string;
    /**
    * Whether activated
    */
    'isActive'?: boolean;
    /**
    * Phone number
    */
    'mobile'?: string;
    /**
    * Is the administrator already
    */
    'isManager'?: boolean;
    /**
    * Whether the user has modified the nickname
    */
    'isNickNameModified'?: boolean;
    /**
    * Whether the member has modified the nickname
    */
    'isMemberNameModified'?: boolean;
    /**
    * default avatar color number
    */
    'avatarColor'?: number;
    /**
    * Nick Name
    */
    'nickName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "memberId",
            "baseName": "memberId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string",
            "format": ""
        },
        {
            "name": "memberName",
            "baseName": "memberName",
            "type": "string",
            "format": ""
        },
        {
            "name": "originName",
            "baseName": "originName",
            "type": "string",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "string",
            "format": ""
        },
        {
            "name": "isManager",
            "baseName": "isManager",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isNickNameModified",
            "baseName": "isNickNameModified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMemberNameModified",
            "baseName": "isMemberNameModified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "avatarColor",
            "baseName": "avatarColor",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "nickName",
            "baseName": "nickName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchMemberVo.attributeTypeMap;
    }

    public constructor() {
    }
}

