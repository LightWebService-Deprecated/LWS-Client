import { Component } from 'react';
import './LwsHeader.css';
import LwsAccountInfo from './LwsAccountInfo';

type HeaderProps = {
  renderAccountInfo: boolean;
  accountName?: string;
  accountRole?: string;
  accountFirstLetter?: string;
};

class LwsHeader extends Component<HeaderProps> {
  render() {
    let accountInfoRenderer;
    if (this.props.renderAccountInfo) {
      accountInfoRenderer = (
        <LwsAccountInfo
          accountName={this.props.accountName ?? ''}
          accountRole={this.props.accountRole ?? ''}
          accountFirstLetter={this.props.accountFirstLetter ?? ''}
        />
      );
    }

    return (
      <div className="LwsHeader">
        <div className="LwsHeader-MainTitle">Lightweight Web Service</div>
        {accountInfoRenderer}
      </div>
    );
  }
}

export default LwsHeader;
