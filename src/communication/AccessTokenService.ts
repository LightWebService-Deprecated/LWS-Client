export class AccessTokenService {
    private static tokenName: string = 'accessToken';

    public static setAccessToken(token: string) {
        window.localStorage.setItem(this.tokenName, token);
    }

    public static getAccessToken(): string | null {
        return window.localStorage.getItem(this.tokenName);
    }

    public static removeAccessToken() {
        window.localStorage.removeItem(this.tokenName);
    }
}