import {Component} from "react";
import "./IconComponent.css";
import "./MainMenuItem.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

type MainMenuProps = {
    iconClassName: string
    redirectionUrl: string
}

class MainMenuItem extends Component<MainMenuProps> {
    render() {
        return (
            <a href={this.props.redirectionUrl} className="MainMenuItem-Container">
                <i className={this.props.iconClassName + " icon-component"}/>
                <div className="MainMenuItem-Text">{this.props.children}</div>
            </a>
        );
    }
}

export default MainMenuItem;