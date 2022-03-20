import {Component} from "react";
import './LwsFragment.css'

class LwsFragment extends Component {
    render() {
        return (
            <div className="LwsFragment">
                {this.props.children}
            </div>
        );
    }
}

export default LwsFragment;