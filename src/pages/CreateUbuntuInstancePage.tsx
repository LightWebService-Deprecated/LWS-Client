import {Component, FormEvent} from "react";
import "./EmptyPage.css";
import LwsHeader from "../components/LwsHeader";
import LwsFragment from "../components/LwsFragment";
import LwsInputField from "../components/LwsInputField";
import LwsButton from "../components/LwsButton";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {AccessTokenService} from "../communication/AccessTokenService";
import {AccountProjection, OpenAPI, UbuntuService} from "../communication";

type CreateUbuntuState = {
    isRedirectionNeeded?: boolean,
    redirectionUrl?: string,
    accountProjection?: AccountProjection
}

class CreateUbuntuInstancePage extends Component<any, CreateUbuntuState> {
    swal = withReactContent(Swal);

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Get Form Data as json object
        let formData = new FormData(event.currentTarget);
        let entries = Object.fromEntries(formData.entries());

        let accessToken = AccessTokenService.getAccessToken()!;

        // Set Header
        OpenAPI.HEADERS = {"X-LWS-AUTH": accessToken}

        try {
            await UbuntuService.postUbuntu(entries);
        } catch (error) {
            await this.swal.fire("Error!", "Unknown error occurred! Please contact admin if error persists.", 'error');
            return;
        }

        // Succeed!
        await this.swal.fire("Success!", "Creating Ubuntu instance succeed!", 'success');
    }

    render() {
        let accountObject = AccessTokenService.getAccountProjection();
        if (accountObject == null) {
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
                        <h2>Create Ubuntu Instance</h2>
                        <form style={{
                            display: 'inherit',
                            flexDirection: 'inherit',
                            gap: 'inherit'
                        }} onSubmit={this.handleSubmit}>
                            <LwsInputField
                                overrideableWidth={"500px"}
                                inputDescription="Deployment Name"
                                inputPlaceHolder="Enter Deployment Name"
                                inputName="deploymentName"
                                inputType="text"
                            />
                            <LwsInputField
                                overrideableWidth={"500px"}
                                inputDescription="SSH Override Port(between 30000 ~ 32767)"
                                inputPlaceHolder="Overrideable SSH Port"
                                inputName="sshOverridePort"
                                inputType="text"
                            />
                            <LwsButton title={"Create Instance"} width={"500px"} type={"submit"}/>
                        </form>
                    </LwsFragment>
                </div>
            </div>
        );
    }
}

export default CreateUbuntuInstancePage;