import {Component} from "react";
import LwsHeader from "../components/LwsHeader";
import LwsButton from "../components/LwsButton";
import LwsInputField from "../components/LwsInputField";
import LwsFragment from "../components/LwsFragment";

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
            </div>
        );
    }
}

export default TestPage;