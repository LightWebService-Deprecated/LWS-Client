import {AccountProjection} from "./models/AccountProjection";

export class AccessTokenService {
    private static tokenName: string = 'accessToken';
    private static accountInfoName: string = 'accountInfo';

    public static setAccessToken(token: string) {
        window.localStorage.setItem(this.tokenName, token);
    }

    public static getAccessToken(): string | null {
        return window.localStorage.getItem(this.tokenName);
    }

    public static removeAccessToken() {
        window.localStorage.removeItem(this.tokenName);
    }

    public static setAccountProjection(accountInfo: AccountProjection) {
        window.localStorage.setItem(this.accountInfoName, JSON.stringify(accountInfo));
    }

    public static getAccountProjection(): AccountProjection | null {
        let accountInfoObject = window.localStorage.getItem(this.accountInfoName);
        if (accountInfoObject == null) {
            return null;
        }

        return JSON.parse(accountInfoObject);
    }
}