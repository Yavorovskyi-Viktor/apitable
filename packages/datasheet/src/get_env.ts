/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Get system environment variables
 */
export const getEnvVars = () => {
  return {
    LOGIN_MOTTO: process.env.LOGIN_MOTTO,
    ENABLE_DATABUS_API: process.env.ENABLE_DATABUS_API === 'true',
    WASM_NEST_BASE_URL: process.env.WASM_NEST_BASE_URL,
    WASM_RUST_BASE_URL: process.env.WASM_RUST_BASE_URL,
    LOGIN_SOCIAL_ICONS_DISABLE: process.env.LOGIN_SOCIAL_ICONS_DISABLE === 'true',
    DINGTALK_LOGIN_APPID: process.env.DINGTALK_LOGIN_APPID,
    QQ_CONNECT_WEB_APPID: process.env.QQ_CONNECT_WEB_APPID,
    integration_feishu_login_appid: process.env.integration_feishu_login_appid,
    WECHAT_MP_APPID: process.env.WECHAT_MP_APPID,
    WECOM_SHOP_SUITEID: process.env.WECOM_SHOP_SUITEID,
    WECOM_SHOP_CORPID: process.env.WECOM_SHOP_CORPID,
    WECHAT_MP_QR_CODE: process.env.WECHAT_MP_QR_CODE,
    FORCE_HTTPS: process.env.FORCE_HTTPS,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SHOW_RECORD_CARD_SETTING: process.env.SHOW_RECORD_CARD_SETTING,
    ENV: process.env.ENV,
    CHANGE_SPACE_ADMIN_VISIBLE: process.env.CHANGE_SPACE_ADMIN_VISIBLE === 'true',
    USER_BIND_PHONE_VISIBLE: process.env.USER_BIND_PHONE_VISIBLE === 'true',
    REGENERATE_API_TOKEN_VISIBLE: process.env.REGENERATE_API_TOKEN_VISIBLE === 'true',
    DELETE_SPACE_VISIBLE: process.env.DELETE_SPACE_VISIBLE === 'true',
    DELETE_ACCOUNT_VISIBLE: process.env.DELETE_ACCOUNT_VISIBLE === 'true',
    HIDDEN_QRCODE: process.env.HIDDEN_QRCODE === 'true',
    USE_CUSTOM_PUBLIC_FILES: process.env.USE_CUSTOM_PUBLIC_FILES === 'true',
    CLOUD_DISABLE_BILLING_UPGRADE: process.env.CLOUD_DISABLE_BILLING_UPGRADE === 'true',
    CLOUD_DISABLE_USE_APP_STORE: process.env.CLOUD_DISABLE_USE_APP_STORE === 'true',
    CLOUD_DISABLE_ACCOUNT_MANAGEMENT: process.env.CLOUD_DISABLE_ACCOUNT_MANAGEMENT === 'true',
    CLOUD_DISABLE_SCAN_CODE_TO_LOGIN: process.env.CLOUD_DISABLE_SCAN_CODE_TO_LOGIN === 'true',
    BAIDU_ANALYSE_ID: process.env.BAIDU_ANALYSE_ID,
    DINGTALK_MONITOR_PLATFORM_ID: process.env.DINGTALK_MONITOR_PLATFORM_ID,
    QNY1: process.env.QNY1,
    QNY2: process.env.QNY2,
    QNY3: process.env.QNY3,
    HELP_MENU_VIDEO_TUTORIALS_URL: process.env.HELP_MENU_VIDEO_TUTORIALS_URL,
    LOGIN_INTRODUCTION_VIDEO: process.env.LOGIN_INTRODUCTION_VIDEO,
    TEMPLATE_FEEDBACK_FORM_URL: process.env.TEMPLATE_FEEDBACK_FORM_URL,
    PRIVATE_DEVELOPMENT_FORM: process.env.PRIVATE_DEVELOPMENT_FORM,
    FIELD_CASCADE_VISIBLE: process.env.FIELD_CASCADE_VISIBLE === 'true',
    INTEGRATIONS_FEISHU_VISIBLE: process.env.INTEGRATIONS_FEISHU_VISIBLE === 'true',
    INTEGRATIONS_DINGTALK_VISIBLE: process.env.INTEGRATIONS_DINGTALK_VISIBLE === 'true',
    INTEGRATIONS_WECOM_VISIBLE: process.env.INTEGRATIONS_WECOM_VISIBLE === 'true',
    INTEGRATIONS_YOZOSOFT_VISIBLE: process.env.INTEGRATIONS_YOZOSOFT_VISIBLE === 'true',
    RECORD_TASK_REMINDER_VISIBLE: process.env.RECORD_TASK_REMINDER_VISIBLE === 'true',
    RECORD_WATCHING_VISIBLE: process.env.RECORD_WATCHING_VISIBLE === 'true',
    FIELD_PERMISSION_VISIBLE: process.env.FIELD_PERMISSION_VISIBLE === 'true',
    FILE_PERMISSION_VISIBLE: process.env.FILE_PERMISSION_VISIBLE === 'true',
    SPACE_SUB_ADMIN_VISIBLE: process.env.SPACE_SUB_ADMIN_VISIBLE === 'true',
    SECURITY_GLOBAL_WATERMARK_VISIBLE: process.env.SECURITY_GLOBAL_WATERMARK_VISIBLE === 'true',
    SECURITY_SPECIFY_MEMBER_TO_EXPORT_DATA_VISIBLE: process.env.SECURITY_SPECIFY_MEMBER_TO_EXPORT_DATA_VISIBLE === 'true',
    SECURITY_MEMBER_CREATE_PUBLIC_LINK_VISIBLE: process.env.SECURITY_MEMBER_CREATE_PUBLIC_LINK_VISIBLE === 'true',
    SECURITY_MEMBER_COPY_DATA_VISIBLE: process.env.SECURITY_MEMBER_COPY_DATA_VISIBLE === 'true',
    SECURITY_MEMBER_DOWNLOAD_ATTCHMENT_VISIBLE: process.env.SECURITY_MEMBER_DOWNLOAD_ATTCHMENT_VISIBLE === 'true',
    SECURITY_MEMBER_INVITE_USER_VISIBLE: process.env.SECURITY_MEMBER_INVITE_USER_VISIBLE === 'true',
    SECURITY_USER_APPLY_TO_JOIN_SPACE_VISIBLE: process.env.SECURITY_USER_APPLY_TO_JOIN_SPACE_VISIBLE === 'true',
    SECURITY_MEMBER_MODIFY_ROOT_CATALOG_VISIBLE: process.env.SECURITY_MEMBER_MODIFY_ROOT_CATALOG_VISIBLE === 'true',
    SECURITY_CONTACTS_ISOLATION_VISIBLE: process.env.SECURITY_CONTACTS_ISOLATION_VISIBLE === 'true',
    SECURITY_SHOW_MEMBER_PHONE_NUMBER_VISIBLE: process.env.SECURITY_SHOW_MEMBER_PHONE_NUMBER_VISIBLE === 'true',
    SPACE_LOGS_VISIBLE: process.env.SPACE_LOGS_VISIBLE === 'true',
    SYSTEM_CONFIGURATION_DEFAULT_THEME: process.env.SYSTEM_CONFIGURATION_DEFAULT_THEME,
    HELP_MENU_CONTACT_US_TYPE: process.env.HELP_MENU_CONTACT_US_TYPE,
    HELP_MENU_JOIN_CHATGROUP_URL: process.env.HELP_MENU_JOIN_CHATGROUP_URL,
    HELP_MENU_OFFICIAL_WEBSITE_URL: process.env.HELP_MENU_OFFICIAL_WEBSITE_URL,
    ACCOUNT_WALLET_HELP_URL: process.env.ACCOUNT_WALLET_HELP_URL,
    ASSISTANT_ACTIVITY_TRAIN_CAMP_END_TIME: process.env.ASSISTANT_ACTIVITY_TRAIN_CAMP_END_TIME,
    LOGIN_AGREE_TERMS_OF_SERVICE_WIZARD_ID: process.env.LOGIN_AGREE_TERMS_OF_SERVICE_WIZARD_ID,
    APIFOX_HOME_URL: process.env.APIFOX_HOME_URL,
    APIFOX_DEBUG_PATCH_URL: process.env.APIFOX_DEBUG_PATCH_URL,
    APIFOX_DEBUG_POST_URL: process.env.APIFOX_DEBUG_POST_URL,
    APIFOX_DEBUG_DELETE_URL: process.env.APIFOX_DEBUG_DELETE_URL,
    APIFOX_DEBUG_GET_URL: process.env.APIFOX_DEBUG_GET_URL,
    APIFOX_DEBUG_UPLOAD_URL: process.env.APIFOX_DEBUG_UPLOAD_URL,
    CALENDAR_SETTING_HELP_URL: process.env.CALENDAR_SETTING_HELP_URL,
    JOIN_CHATGROUP_PAGE_URL: process.env.JOIN_CHATGROUP_PAGE_URL,
    WIDGET_CREATE_WIDGET_HELP_URL: process.env.WIDGET_CREATE_WIDGET_HELP_URL,
    ONBOARDING_CUSTOMER_SERVICE_BACKGROUND_IMG: process.env.ONBOARDING_CUSTOMER_SERVICE_BACKGROUND_IMG,
    ONBOARDING_CUSTOMER_SERVICE_QRCODE_AVATAR_IMG: process.env.ONBOARDING_CUSTOMER_SERVICE_QRCODE_AVATAR_IMG,
    WIDGET_DEFAULT_TEMPLATE_URL: process.env.WIDGET_DEFAULT_TEMPLATE_URL,
    HELP_MENU_DEVELOPERS_CENTER_URL: process.env.HELP_MENU_DEVELOPERS_CENTER_URL,
    BILLING_ENTERPRISE_CONTACT_US_QRCODE_IMG: process.env.BILLING_ENTERPRISE_CONTACT_US_QRCODE_IMG,
    SYSTEM_CONFIGURATION_ERROR_MSG_QRCODE_IMG: process.env.SYSTEM_CONFIGURATION_ERROR_MSG_QRCODE_IMG,
    GANTT_CONFIG_COLOR_HELP_URL: process.env.GANTT_CONFIG_COLOR_HELP_URL,
    GANTT_SET_TASK_RELATION_HELP_URL: process.env.GANTT_SET_TASK_RELATION_HELP_URL,
    API_PANEL_HELP_URL: process.env.API_PANEL_HELP_URL,
    ACCOUNT_DELELTE_HELP_URL: process.env.ACCOUNT_DELELTE_HELP_URL,
    PRIVACY_POLICY_URL: process.env.PRIVACY_POLICY_URL,
    SERVICE_AGREEMENT_URL: process.env.SERVICE_AGREEMENT_URL,
    SYSTEM_CONFIGURATION_OFFICIAL_AVATAR: process.env.SYSTEM_CONFIGURATION_OFFICIAL_AVATAR,
    ARCHITECTURE_SETTING_HELP_URL: process.env.ARCHITECTURE_SETTING_HELP_URL,
    BILLING_PAYMENT_PAGE_CONTACT_US_IMG: process.env.BILLING_PAYMENT_PAGE_CONTACT_US_IMG,
    BILLING_PAY_SUCCESS_QRCODE_IMG: process.env.BILLING_PAY_SUCCESS_QRCODE_IMG,
    HELP_MENU_PRODUCT_ROADMAP_URL: process.env.HELP_MENU_PRODUCT_ROADMAP_URL,
    RECORD_ACTIVITY_HELP_URL: process.env.RECORD_ACTIVITY_HELP_URL,
    ASSISTANT_RELEASE_CHANGELOGS_PAGE_URL: process.env.ASSISTANT_RELEASE_CHANGELOGS_PAGE_URL,
    SPACE_ROLE_HELP_URL: process.env.SPACE_ROLE_HELP_URL,
    SYSTEM_CONFIGURATION_SERVER_ERROR_BG_IMG: process.env.SYSTEM_CONFIGURATION_SERVER_ERROR_BG_IMG,
    WORKBENCH_NODE_SHARE_HELP_URL: process.env.WORKBENCH_NODE_SHARE_HELP_URL,
    HELP_MENU_SOLUTION_URL: process.env.HELP_MENU_SOLUTION_URL,
    SPACE_ENTERPRISE_CERTIFICATION_FORM_URL: process.env.SPACE_ENTERPRISE_CERTIFICATION_FORM_URL,
    HELP_MENU_SUBSCRIBE_DEMONSTRATE_FORM_URL: process.env.HELP_MENU_SUBSCRIBE_DEMONSTRATE_FORM_URL,
    VIKABY_MENU_SUBSCRIBE_DEMONSTRATE_FORM_URL: process.env.VIKABY_MENU_SUBSCRIBE_DEMONSTRATE_FORM_URL,
    TEMPLATE_SPACE_ID: process.env.TEMPLATE_SPACE_ID,
    TRASH_HELP_URL: process.env.TRASH_HELP_URL,
    USER_FEEDBACK_FORM_URL: process.env.USER_FEEDBACK_FORM_URL,
    HELP_MENU_USER_COMMUNITY_URL: process.env.HELP_MENU_USER_COMMUNITY_URL,
    SYSTEM_CONFIGURATION_OFFICIAL_LOGO: process.env.SYSTEM_CONFIGURATION_OFFICIAL_LOGO,
    WIDGET_CENTER_HELP_URL: process.env.WIDGET_CENTER_HELP_URL,
    WIDGET_HOW_TO_CLOSE_BROWSER_RESTRICTION_HELP_URL: process.env.WIDGET_HOW_TO_CLOSE_BROWSER_RESTRICTION_HELP_URL,
    WIDGET_DEVELOP_INIT_HELP_URL: process.env.WIDGET_DEVELOP_INIT_HELP_URL,
    WIDGET_DEVELOP_INSTALL_HELP_URL: process.env.WIDGET_DEVELOP_INSTALL_HELP_URL,
    WIDGET_DEVELOP_PREVIEW_HELP_URL: process.env.WIDGET_DEVELOP_PREVIEW_HELP_URL,
    WIDGET_DEVELOP_START_HELP_URL: process.env.WIDGET_DEVELOP_START_HELP_URL,
    WIDGET_PANEL_EMPTY_IMG: process.env.WIDGET_PANEL_EMPTY_IMG,
    WIDGET_RELEASE_HELP_URL: process.env.WIDGET_RELEASE_HELP_URL,
    TIME_MACHINE_VISIBLE: process.env.TIME_MACHINE_VISIBLE === 'true',
    SYSTEM_CONFIGURATION_DEFAULT_LANGUAGE: process.env.SYSTEM_CONFIGURATION_DEFAULT_LANGUAGE,
    USER_SETTING_EXPERIMENTAL_FEATURES_VISIBLE: process.env.USER_SETTING_EXPERIMENTAL_FEATURES_VISIBLE === 'true',
    SPACE_EXPERIMENTAL_FEATURES_VISIBLE: process.env.SPACE_EXPERIMENTAL_FEATURES_VISIBLE === 'true',
    SPACE_PERMISSION_OVERVIEW_VISIBLE: process.env.SPACE_PERMISSION_OVERVIEW_VISIBLE === 'true',
    SPACE_SECURITY_PAGE_VISIBLE: process.env.SPACE_SECURITY_PAGE_VISIBLE === 'true',
    CALENDAR_SETTING_GUIDE_VIDEO_VISIBLE: process.env.CALENDAR_SETTING_GUIDE_VIDEO_VISIBLE === 'true',
    ARCHITECTURE_SETTING_GUIDE_VIDEO_VISIBLE: process.env.ARCHITECTURE_SETTING_GUIDE_VIDEO_VISIBLE === 'true',
    GANTT_SETTING_GUIDE_VIDEO_VISIBLE: process.env.GANTT_SETTING_GUIDE_VIDEO_VISIBLE === 'true',
    SPACE_OVERVIEW_SOCIAL_AD_URL: process.env.SPACE_OVERVIEW_SOCIAL_AD_URL,
    CRASH_PAGE_CONTACT_US_URL: process.env.CRASH_PAGE_CONTACT_US_URL,
    CRASH_PAGE_REPORT_ISSUES_URL: process.env.CRASH_PAGE_REPORT_ISSUES_URL,
    HELP_CONFIG: process.env.HELP_CONFIG,
    CUSTOM_WIDGET_VISIBLE: process.env.CUSTOM_WIDGET_VISIBLE === 'true',
    HELP_MENU_CONTACT_US_URL: process.env.HELP_MENU_CONTACT_US_URL,
    LOGO: process.env.LOGO,
    COMMON_IMG_LOGO: process.env.COMMON_IMG_LOGO,
    LONG_DARK_LOGO: process.env.LONG_DARK_LOGO,
    LONG_LIGHT_LOGO: process.env.LONG_LIGHT_LOGO,
    FAVICON: process.env.FAVICON,
    LOGO_TEXT_LIGHT: process.env.LOGO_TEXT_LIGHT,
    LOGO_TEXT_DARK: process.env.LOGO_TEXT_DARK,
    LOGIN_LOGO: process.env.LOGIN_LOGO,
    LIVECHAT_VISIBLE: process.env.LIVECHAT_VISIBLE === 'true',
    EMBED_ERROR_PAGE_HELP_URL: process.env.EMBED_ERROR_PAGE_HELP_URL,
    // private config
    LOGIN_OFFICIAL_WEBSITE_URL: process.env.LOGIN_OFFICIAL_WEBSITE_URL,
    CONTACTS_MODAL_BULK_IMPORT_VISIBLE: process.env.CONTACTS_MODAL_BULK_IMPORT_VISIBLE === 'true',
    CONTACTS_MODAL_INVITE_VIA_EMAIL_VISIBLE: process.env.CONTACTS_MODAL_INVITE_VIA_EMAIL_VISIBLE === 'true',
    ACCOUNT_WALLET_VISIBLE: process.env.ACCOUNT_WALLET_VISIBLE === 'true',
    ACCOUNT_RESET_PASSWORD_VISIBLE: process.env.ACCOUNT_RESET_PASSWORD_VISIBLE === 'true',
    ACCOUNT_LOGOUT_VISIBLE: process.env.ACCOUNT_LOGOUT_VISIBLE === 'true',
    SPACE_INTEGRATION_PAGE_VISIBLE: process.env.SPACE_INTEGRATION_PAGE_VISIBLE === 'true',
    LOGIN_ON_AUTHORIZATION_REDIRECT_TO_URL: process.env.LOGIN_ON_AUTHORIZATION_REDIRECT_TO_URL,
    CUSTOM_SYNC_CONTACTS_LINKID: process.env.CUSTOM_SYNC_CONTACTS_LINKID,
    LOGIN_SSO_VISIBLE: process.env.LOGIN_SSO_VISIBLE === 'true',
    LOGIN_DEFAULT_VERIFY_TYPE: process.env.LOGIN_DEFAULT_VERIFY_TYPE,
    LOGIN_DEFAULT_ACCOUNT_TYPE: process.env.LOGIN_DEFAULT_ACCOUNT_TYPE,
    // CUSTOM_IDAAS_VISIBLE: process.env.CUSTOM_IDAAS_VISIBLE,
    MAXIMUM_VIEW_COUNT_PER_DATASHEET: process.env.MAXIMUM_VIEW_COUNT_PER_DATASHEET,
    MAXIMUM_MANAGEABLE_SPACE_COUNT_PER_USER: process.env.MAXIMUM_MANAGEABLE_SPACE_COUNT_PER_USER,
    MAXIMUM_FIELD_COUNT_PER_DATASHEET: process.env.MAXIMUM_FIELD_COUNT_PER_DATASHEET,
    WELCOME_CONFIG: process.env.WELCOME_CONFIG,
    WIDGET_REPO_PREFIX: process.env.WIDGET_REPO_PREFIX,
    SPACE_ROLE_VISIBLE: process.env.SPACE_ROLE_VISIBLE === 'true',
    CREATE_ROBOT_AVATAR: process.env.CREATE_ROBOT_AVATAR,
    ROBOT_DEFAULT_AVATAR: process.env.ROBOT_DEFAULT_AVATAR,
    LOGIN_WECHAT_GROUP_QR_CODE: process.env.LOGIN_WECHAT_GROUP_QR_CODE,
    LOGIN_VIKA_QR_CODE: process.env.LOGIN_VIKA_QR_CODE,
    NEXT_PUBLIC_PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL,
    COOKIEBOT_ID: process.env.COOKIEBOT_ID,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    USER_EDIT_EMAIL_VISIBLE: process.env.USER_EDIT_EMAIL_VISIBLE === 'true',
    NEW_USER_WELCOME_NOTIFY_URL: process.env.NEW_USER_WELCOME_NOTIFY_URL,
    INVITE_USER_BY_AUTH0: process.env.INVITE_USER_BY_AUTH0 === 'true',
    ALARM_TIME_UTC_VISIBLE: process.env.ALARM_TIME_UTC_VISIBLE === 'true',
    HIDDEN_BUSINESS_SUPPORT_PROGRAM_MODAL: process.env.HIDDEN_BUSINESS_SUPPORT_PROGRAM_MODAL,
    DEFAULT_TITLE_NAME: process.env.DEFAULT_TITLE_NAME,
    IS_APITABLE: process.env.IS_APITABLE === 'true',
    IS_AITABLE: process.env.IS_APITABLE === 'true',
    UNIT_LIST_TEAM_INFO_VISIBLE: process.env.UNIT_LIST_TEAM_INFO_VISIBLE === 'true',
    WIDGET_CENTER_OFFICIAL_TIP_VISIBLE: process.env.WIDGET_CENTER_OFFICIAL_TIP_VISIBLE === 'true',
    IS_ENTERPRISE: process.env.IS_ENTERPRISE === 'true',
    API_PANEL_MORE_URL: process.env.API_PANEL_MORE_URL,
    VIEW_NAME_MAX_COUNT: process.env.VIEW_NAME_MAX_COUNT,
    DISABLED_QINIU_COMPRESSION_PARAMS: process.env.DISABLED_QINIU_COMPRESSION_PARAMS === 'true',
    DASHBOARD_WIDGET_MAX_NUM: process.env.DASHBOARD_WIDGET_MAX_NUM,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    ADD_RECORD_BUTTON_BG_COLOR: process.env.ADD_RECORD_BUTTON_BG_COLOR,
    EMBED_BAIDU_CATCH_SDK: process.env.EMBED_BAIDU_CATCH_SDK,
    USE_CE_LOGIN_PAGE: process.env.USE_CE_LOGIN_PAGE === 'true',
    IGNORE_IMG_SIZE_LIMIT: process.env.IGNORE_IMG_SIZE_LIMIT === 'true',
    ASYNC_COMPUTE_INFO_IMAGE: process.env.ASYNC_COMPUTE_INFO_IMAGE,
    RENDER_PROMPT_INFO_IMAGE: process.env.RENDER_PROMPT_INFO_IMAGE,
    ROBOT_INFO_IMAGE: process.env.ROBOT_INFO_IMAGE,
    WIDGET_CENTER_INFO_IMAGE: process.env.WIDGET_CENTER_INFO_IMAGE,
    RENDER_NORMAL_INFO_IMAGE: process.env.RENDER_NORMAL_INFO_IMAGE,
    VIEW_MANUAL_SAVE_INFO_IMAGE: process.env.VIEW_MANUAL_SAVE_INFO_IMAGE,
    IS_CANVAS_IMAGE_CROSS_ORIGIN: process.env.IS_CANVAS_IMAGE_CROSS_ORIGIN === 'true',
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
    ENABLED_REWARDFUL: process.env.ENABLED_REWARDFUL === 'true',
    FORM_LOGIN_URL: process.env.FORM_LOGIN_URL,
    TRANSLATION_FEEDBACK_HELP_URL: process.env.TRANSLATION_FEEDBACK_HELP_URL,
    IS_SELFHOST: process.env.IS_SELFHOST === 'true',
    ROBOT_TRIGGER_ICON: process.env.ROBOT_TRIGGER_ICON,
    LOGIN_LOGO_LIGHT: process.env.LOGIN_LOGO_LIGHT,
    AI_ENTRANCE_VISIBLE: process.env.AI_ENTRANCE_VISIBLE === 'true',
    AI_OPEN_FORM: process.env.AI_OPEN_FORM,
    AUTH0_ENABLED: process.env.AUTH0_ENABLED === 'true',
    OSS_SIGNATURE_ENABLED: process.env.OSS_SIGNATURE_ENABLED === 'true',
    AI_API_HELP_URL: process.env.AI_API_HELP_URL,
  };
};
