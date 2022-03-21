/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessToken } from '../models/AccessToken';
import type { AccountProjection } from '../models/AccountProjection';
import type { LoginRequest } from '../models/LoginRequest';
import type { RegisterRequest } from '../models/RegisterRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountService {

    /**
     * Register new account
     * @param requestBody
     * @returns any When register succeeds.(Empty body with 200)
     * @throws ApiError
     */
    public static postAccount(
        requestBody: RegisterRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/account',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `When UserEmail is not valid.`,
                409: `When userId already exists(Duplicated account)`,
            },
        });
    }

    /**
     * Get Account information without sensitive information(password)
     * @returns AccountProjection When getting account information succeeds.
     * @throws ApiError
     */
    public static getAccount(): CancelablePromise<AccountProjection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/account',
            errors: {
                404: `When target account is not-found.`,
            },
        });
    }

    /**
     * Delete LWS Account(Incl. Resources)
     * @returns any When deleting account succeeds.
     * @throws ApiError
     */
    public static deleteAccount(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/account',
            errors: {
                404: `When target account is somehow not found.`,
            },
        });
    }

    /**
     * Login to account
     * @param requestBody
     * @returns AccessToken When login succeeds.
     * @throws ApiError
     */
    public static postAccountLogin(
        requestBody: LoginRequest,
    ): CancelablePromise<AccessToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/account/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `When login failed because either email or password is wrong.`,
            },
        });
    }

}