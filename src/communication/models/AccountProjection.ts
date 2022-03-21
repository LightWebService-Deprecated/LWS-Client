/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccountProjection = {
    /**
     * Account ID
     */
    accountId?: string;
    /**
     * Registered Nickname
     */
    userNickName?: string;
    /**
     * Account role in string. Supported: Admin, User
     */
    accountRole?: string;
    /**
     * Nickname's first letter
     */
    firstLetter?: string;
};
