import {Component} from "react";
import './LwsHeader.css'
import LwsAccountInfo from "./LwsAccountInfo";

type HeaderProps = {
    renderAccountInfo: boolean;
}

class LwsHeader extends Component<HeaderProps> {
    render() {
        let test;
        if (this.props.renderAccountInfo) {
            test = <LwsAccountInfo accountName={"KangDroid"} accountRole={"Admin"} accountFirstLetter={"K"}/>
        }

        return (
            <div className="LwsHeader">
                <div className="LwsHeader-MainTitle">Lightweight Web Service</div>
                {test}
            </div>
        );
    }
}

export default LwsHeader;