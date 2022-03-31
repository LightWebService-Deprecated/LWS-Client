import { Component } from 'react';
import './LwsButton.css';

type LwsButtonProps = {
  title: string;
  width?: string | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

class LwsButton extends Component<LwsButtonProps> {
  render() {
    return (
      <button
        className="LwsButton"
        style={{
          width: this.props.width,
        }}
        type={this.props.type}
      >
        {this.props.title}
      </button>
    );
  }
}

export default LwsButton;
