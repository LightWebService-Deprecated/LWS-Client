import {Component} from "react";
import './LwsHeader.css'

type HeaderProps = {
    renderAccountInfo: boolean;
}

class LwsHeader extends Component<HeaderProps> {
    render() {
        return (
            <div className="LwsHeader">
                <div className="LwsHeader-MainTitle">Lightweight Web Service</div>
            </div>
        );
    }
}

export default LwsHeader;