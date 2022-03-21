import {Component} from "react";
import LwsHeader from "../components/LwsHeader";
import './EmptyPage.css'
import LwsFragment from "../components/LwsFragment";
import LwsInputField from "../components/LwsInputField";
import LwsButton from "../components/LwsButton";

class RegisterPage extends Component {

    render() {
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
                        }}>
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