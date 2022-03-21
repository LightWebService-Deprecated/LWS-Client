/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccessToken = {
    /**
     * An Unique Access Token
     */
    id?: string;
    /**
     * An Unique Account ID
     */
    userId?: string;
    /**
     * Set of account roles(Admin, User)
     */
    roles?: Array<string>;
};
