import { Component, FormEvent } from 'react';
import { Navigate } from 'react-router';
import './EmptyPage.css';
import LwsHeader from '../components/LwsHeader';
import LwsFragment from '../components/LwsFragment';
import LwsInputField from '../components/LwsInputField';
import LwsButton from '../components/LwsButton';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { AccessToken, AccountService, ApiError } from '../communication';
import { AccessTokenService } from '../communication/AccessTokenService';

type LoginState = {
  isRedirectionNeeded?: boolean;
  redirectionUrl: string;
};

class LoginPage extends Component<any, LoginState> {
  swal = withReactContent(Swal);

  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Get Form Data as json object
    let formData = new FormData(event.currentTarget);
    let entries = Object.fromEntries(formData.entries());
    let loginResponse: AccessToken;

    try {
      loginResponse = await AccountService.postAccountLogin(entries);
    } catch (error) {
      if (error instanceof ApiError) {
        await this.handleResponseError((error as ApiError).status);
      } else {
        await this.swal.fire(
          'Error!',
          'Unknown error occurred! Please contact admin if error persists.',
          'error'
        );
      }
      return;
    }

    // Succeed!
    AccessTokenService.setAccessToken(loginResponse.id!);
    this.setState({
      isRedirectionNeeded: true,
      redirectionUrl: '/',
    });
  }

  async handleResponseError(statusCode: number) {
    switch (statusCode) {
      case 403:
        await this.swal.fire(
          'Error!',
          'Email or password is wrong! Please check your credential again.',
          'error'
        );
        break;
      default:
        await this.swal.fire(
          'Error!',
          'Unknown error occurred! Please contact admin if error persists.',
          'error'
        );
    }
  }

  render() {
    if (this.state?.isRedirectionNeeded === true) {
      return <Navigate to={this.state.redirectionUrl} replace={true} />;
    }

    return (
      <div className={'EmptyPage'}>
        <LwsHeader renderAccountInfo={false} />
        <div className="ContentPageWithoutSidebar">
          <LwsFragment>
            <div style={{ fontSize: '24px', fontWeight: '700' }}>Login</div>
            <div style={{ fontSize: '20.7px', fontWeight: '700' }}>
              Login to LWS Service
            </div>
            <form
              style={{
                display: 'inherit',
                flexDirection: 'inherit',
                gap: 'inherit',
              }}
              onSubmit={this.handleSubmit}
            >
              <LwsInputField
                overrideableWidth={'440px'}
                inputDescription="Email"
                inputPlaceHolder="Enter Email Address"
                inputName="userEmail"
                inputType="email"
              />
              <LwsInputField
                overrideableWidth={'440px'}
                inputDescription="Password"
                inputPlaceHolder="Enter Password"
                inputName="userPassword"
                inputType="password"
              />
              <LwsButton title={'Login'} width={'440px'} type={'submit'} />
            </form>
            <a
              href="/account/register"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Not an user? Register Now!
            </a>
          </LwsFragment>
        </div>
      </div>
    );
  }
}

export default LoginPage;
