import { Component } from 'react';
import { Navigate } from 'react-router';
import { AccessTokenService } from '../communication/AccessTokenService';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import {
  AccountProjection,
  AccountService,
  ApiError,
  OpenAPI,
} from '../communication';

type LwsAuthState = {
  isRedirectionNeeded?: boolean;
  redirectionUrl?: string;
  isRenderReady?: boolean;
};

export class LwsAuthComponent extends Component<any, LwsAuthState> {
  swal = withReactContent(Swal);

  constructor(props: any) {
    super(props);
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

  async componentDidMount() {
    let accessToken = AccessTokenService.getAccessToken();
    if (accessToken == null) {
      await this.swal.fire('Error!', 'Unauthorized! Please login.', 'error');
      this.redirectToLogin();
      return;
    }

    // Set Header
    OpenAPI.HEADERS = { 'X-LWS-AUTH': accessToken };

    // Do Request
    let accountResponse: AccountProjection;
    try {
      accountResponse = await AccountService.getAccount();
    } catch (error) {
      if (error instanceof ApiError) {
        await this.handleGetAccountApiError((error as ApiError).status);
      } else {
        await this.swal.fire(
          'Unknown Error!',
          'Please contact admin if error persists.',
          'error'
        );
      }
      this.redirectToLogin();
      return;
    }

    AccessTokenService.setAccountProjection(accountResponse);
    this.setState({
      isRedirectionNeeded: false,
      isRenderReady: true,
    });
  }

  redirectToLogin() {
    this.setState({
      isRedirectionNeeded: true,
      redirectionUrl: '/account/login',
      isRenderReady: false,
    });
  }

  async handleGetAccountApiError(status: number) {
    switch (status) {
      case 401:
      case 404:
        await this.swal.fire('Error!', 'Unauthorized! Please login.', 'error');
        break;
      default:
        await this.swal.fire(
          'Unknown Error!',
          'Please contact admin if error persists.',
          'error'
        );
    }
  }

  render() {
    if (this.state?.isRedirectionNeeded === true) {
      return (
        <Navigate
          to={this.state?.redirectionUrl ?? '/account/login'}
          replace={true}
        />
      );
    }

    if (this.state?.isRenderReady === true) {
      return <>{this.props.children}</>;
    }

    return <></>;
  }
}
