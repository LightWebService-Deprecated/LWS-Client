import {Component} from "react";
import './LwsInputField.css'

type InputFieldProps = {
    inputDescription?: string;
    inputPlaceHolder?: string;
    inputName?: string;
    inputType?: string;
}

class LwsInputField extends Component<InputFieldProps> {
    render() {
        return (
            <fieldset className="LwsFieldSet">
                <label className="LwsInputLabel">{this.props.inputDescription}</label>
                <input
                    className="LwsInput"
                    name={this.props.inputName}
                    placeholder={this.props.inputPlaceHolder}
                    type={this.props.inputType}
                />
            </fieldset>
        );
    }
}

export default LwsInputField;