import {Component, FormEvent} from "react";
import {Navigate} from "react-router";
import LwsHeader from "../components/LwsHeader";
import './EmptyPage.css'
import LwsFragment from "../components/LwsFragment";
import LwsInputField from "../components/LwsInputField";
import LwsButton from "../components/LwsButton";
import {AccountService, ApiError} from "../communication";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

type RegisterState = {
    isRegistered?: boolean
}

class RegisterPage extends Component<any, RegisterState> {
    swal = withReactContent(Swal);

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Get Form Data as json object
        var formData = new FormData(event.currentTarget);
        var entries = Object.fromEntries(formData.entries());

        try {
            await AccountService.postAccount(entries);
        } catch (error) {
            if (error instanceof ApiError) {
                await this.handleResponseError((error as ApiError).status, entries);
            } else {
                await this.swal.fire("Error!", "Unknown error occurred! Please contact admin if error persists.", 'error');
            }
            return;
        }

        // Succeed!
        this.setState({isRegistered: true})
    }

    async handleResponseError(statusCode: number, entries: any) {
        switch (statusCode) {
            case 400:
                await this.swal.fire("Error!", "Please fill out all fields!", 'error');
                break;
            case 409:
                await this.swal.fire("Error!", `User Email with ${entries.userEmail} already exists!`, 'error');
                break;
            default:
                await this.swal.fire("Error!", "Unknown error occurred! Please contact admin if error persists.", 'error');
        }
    }

    render() {
        if (this.state?.isRegistered === true) {
            return (<Navigate to='/account/login' replace={true}/>)
        }

        return (
            <div className="EmptyPage">
                <LwsHeader renderAccountInfo={false}/>
                <div className="ContentPageWithoutSidebar">
                    <LwsFragment>
                        <div style={{fontSize: '24px', fontWeight: '700'}}>Register</div>
                        <div style={{fontSize: '20.7px', fontWeight: '700'}}>Register to LWS Service</div>
                        <form style={{
                            display: 'inherit',
                            flexDirection: 'inherit',
                            gap: 'inherit'
                        }} onSubmit={this.handleSubmit}>
                            <LwsInputField
                                overrideableWidth={"440px"}
                                inputDescription="Email"
                                inputPlaceHolder="Enter Email Address"
                                inputName="userEmail"
                                inputType="email"
                            />
                            <LwsInputField
                                overrideableWidth={"440px"}
                                inputDescription="NickName"
                                inputPlaceHolder="Enter Nickname"
                                inputName="userNickName"
                                inputType="text"
                            />
                            <LwsInputField
                                overrideableWidth={"440px"}
                                inputDescription="Password"
                                inputPlaceHolder="Enter Password"
                                inputName="userPassword"
                                inputType="password"
                            />
                            <LwsInputField
                                overrideableWidth={"440px"}
                                inputDescription="Verify Password"
                                inputPlaceHolder="Verify Password"
                                inputName=""
                                inputType="password"
                            />
                            <LwsButton title={"Register"} width={"440px"} type={"submit"}/>
                        </form>
                    </LwsFragment>
                </div>
            </div>
        );
    }
}

export default RegisterPage;