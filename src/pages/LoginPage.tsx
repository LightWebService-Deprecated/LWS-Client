import {Component} from "react";
import './EmptyPage.css'
import LwsHeader from "../components/LwsHeader";
import LwsFragment from "../components/LwsFragment";
import LwsInputField from "../components/LwsInputField";
import LwsButton from "../components/LwsButton";

class LoginPage extends Component {
    render() {
        return (
            <div className={"EmptyPage"}>
                <LwsHeader renderAccountInfo={false}/>
                <div className="ContentPageWithoutSidebar">
                    <LwsFragment>
                        <div style={{fontSize: '24px', fontWeight: '700'}}>Login</div>
                        <div style={{fontSize: '20.7px', fontWeight: '700'}}>Login to LWS Service</div>
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
                                inputDescription="Password"
                                inputPlaceHolder="Enter Password"
                                inputName="userPassword"
                                inputType="password"
                            />
                            <LwsButton title={"Login"} width={"440px"} type={"submit"}/>
                        </form>
                    </LwsFragment>
                </div>
            </div>
        );
    }
}

export default LoginPage;