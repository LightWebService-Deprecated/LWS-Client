import {Component} from "react";
import './LwsAccountInfo.css';

type HeaderAccountInfo = {
    accountName: string;
    accountRole: string;
    accountFirstLetter: string;
}

class LwsAccountInfo extends Component<HeaderAccountInfo> {
    render() {
        return (
            <div className="AccountInfoContainer">
                <div className="AccountInfoContainer-Text">
                    <div className="AccountInfoContainer-Name">{this.props.accountName}</div>
                    <div className="AccountInfoContainer-Role">{this.props.accountRole}</div>
                </div>
                <div className="AccountInfoContainer-Icon">
                    <div className="AccountInfoContainer-Icon-Text">K</div>
                </div>
            </div>
        );
    }
}

export default LwsAccountInfo;