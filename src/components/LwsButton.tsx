import {Component} from "react";
import './LwsButton.css'

type LwsButtonProps = {
    title: string;
    width?: string | undefined;
}

class LwsButton extends Component<LwsButtonProps> {
    render() {
        return (
            <button className="LwsButton" style={{
                width: this.props.width
            }}>{this.props.title}</button>
        )
    }
}

export default LwsButton;