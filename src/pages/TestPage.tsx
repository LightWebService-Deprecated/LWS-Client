import {Component} from "react";
import LwsHeader from "../components/LwsHeader";
import LwsButton from "../components/LwsButton";
import LwsInputField from "../components/LwsInputField";
import LwsFragment from "../components/LwsFragment";
import MainMenuItem from "../components/MainMenuItem";

class TestPage extends Component {
    render() {
        return (
            <div>
                <LwsHeader renderAccountInfo={false}/>
                <LwsButton title="Hello, World Button!"/>
                <LwsInputField
                    inputDescription="Email"
                    inputPlaceHolder="Enter Email Address"
                    inputName="userEmail"
                    inputType="email"
                />
                <LwsFragment>
                    <LwsButton title="Button inside Fragment"/>
                </LwsFragment>
                <MainMenuItem iconClassName="bi bi-globe2" redirectionUrl=''>
                    Create Ubuntu <br/> Instance
                </MainMenuItem>
            </div>
        );
    }
}

export default TestPage;