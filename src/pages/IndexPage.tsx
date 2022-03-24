import {Component} from "react";
import {AccountProjection} from "../communication";
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

    render() {
        let accountObject = AccessTokenService.getAccountProjection();
        if (accountObject == null) {
            console.log("null");
            return (<></>);
        }

        return (
            <div className={"EmptyPage"}>
                <LwsHeader
                    renderAccountInfo={true}
                    accountRole={accountObject.accountRole}
                    accountName={accountObject.userNickName}
                    accountFirstLetter={accountObject.firstLetter}
                />
                <div className={"ContentPageWithoutSidebar"}>
                    <LwsFragment>
                        <h2>Available Menu</h2>
                        <div className="IndexPage-MenuContainer">
                            <MainMenuItem
                                iconClassName="bi bi-globe2"
                                redirectionUrl='/instance/ubuntu'>
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