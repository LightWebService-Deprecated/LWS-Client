import {Component} from "react";
import {Navigate} from "react-router";
import {AccountProjection, AccountService, ApiError, OpenAPI} from "../communication";
import LwsHeader from "../components/LwsHeader";
import LwsFragment from "../components/LwsFragment";
import {AccessTokenService} from "../communication/AccessTokenService";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import MainMenuItem from "../components/MainMenuItem";
import './IndexPage.css'

type IndexState = {
    isRedirectionNeeded?: boolean,
    redirectionUrl?: string,
    accountProjection?: AccountProjection
}

class IndexPage extends Component<any, IndexState> {
    swal = withReactContent(Swal);

    constructor(props: any) {
        super(props);
        this.redirectToLogin = this.redirectToLogin.bind(this);
    }

    async componentDidMount() {
        let accessToken = AccessTokenService.getAccessToken();
        if (accessToken == null) {
            await this.redirectToLogin();
            return;
        }
        // Set Header
        OpenAPI.HEADERS = {"X-LWS-AUTH": accessToken}

        // Do Request
        let accountResponse: AccountProjection;
        try {
            accountResponse = await AccountService.getAccount();
        } catch (error) {
            if (error instanceof ApiError) {
                switch ((error as ApiError).status) {
                    case 401:
                    case 404:
                        await this.swal.fire("Error!", "Unauthorized! Please login.", "error");
                        break;
                    default:
                        await this.swal.fire("Unknown Error!", "Please contact admin if error persists.", "error");
                }
            } else {
                await this.swal.fire("Unknown Error!", "Please contact admin if error persists.", "error");
            }
            return;
        }

        // Handle if succeeds.
        this.setState({
            isRedirectionNeeded: false,
            accountProjection: accountResponse
        });
    }

    async redirectToLogin() {
        await this.swal.fire("Error!", "Unauthorized! Please login.", "error");
        this.setState({
            isRedirectionNeeded: true,
            redirectionUrl: "/account/login"
        });
    }

    render() {
        if (this.state?.isRedirectionNeeded === true) {
            return <Navigate to={this.state.redirectionUrl ?? "/account/login"} replace={true}/>
        }

        return (
            <div className={"EmptyPage"}>
                <LwsHeader
                    renderAccountInfo={true}
                    accountRole={this.state?.accountProjection?.accountRole ?? ""}
                    accountName={this.state?.accountProjection?.userNickName ?? ""}
                    accountFirstLetter={this.state?.accountProjection?.firstLetter ?? ""}
                />
                <div className={"ContentPageWithoutSidebar"}>
                    <LwsFragment>
                        <h2>Available Menu</h2>
                        <div className="IndexPage-MenuContainer">
                            <MainMenuItem
                                iconClassName="bi bi-globe2"
                                redirectionUrl=''>
                                Create Ubuntu<br/>Instance
                            </MainMenuItem>
                            <MainMenuItem
                                iconClassName="bi bi-globe2"
                                redirectionUrl=''>
                                Create MongoDB<br/>Instance
                            </MainMenuItem>
                            <MainMenuItem
                                iconClassName="bi bi-globe2"
                                redirectionUrl=''>
                                Create Redis<br/>Instance
                            </MainMenuItem>
                        </div>
                    </LwsFragment>
                </div>
            </div>
        );
    }
}

export default IndexPage;