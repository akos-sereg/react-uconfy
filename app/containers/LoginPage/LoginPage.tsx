import * as React from 'react'
import { Helmet } from 'react-helmet'
import {eraseLoginErrorMessage, login} from './actions'
import stylesForWeb from './style.scss'
import stylesForMobile from './style.mobile.scss'
import {Link} from "react-router-dom"
import {getLoginLink, getSignupLink} from "../../services/UrlService"
import NotificationBar, {NotificationListener} from "../../components/NotificationBar/NotificationBar"
import {isMobile} from "../../services/Environment"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

type Props = {
  dispatch: Function
  isProcessing: boolean
  loginErrorMessage: string
};

const LoginPage = (props: Props) => {
  const { isProcessing } = props
  const notification = new NotificationListener()
  const isSignupFlow = ['#/signup'].includes(document.location.hash)
  const styles = isMobile() ? stylesForMobile : stylesForWeb

  const handleForgotPassword = (event: any) => {
    event.preventDefault()
    alert ('not implemented yet')
  }

  if (props.loginErrorMessage && props.loginErrorMessage != '') {
    notification.showMessage(props.loginErrorMessage)
  }

  const notificationClosed = () => {
    props.dispatch(eraseLoginErrorMessage())
  }

  return (
    <div>
      <Helmet>
        <title>uConfy - Login</title>
        <meta
          name="description"
          content="uConfy"
        />
      </Helmet>

      <NotificationBar handle={notification} onClose={notificationClosed} />

      {isSignupFlow ?
        <SignupForm dispatch={props.dispatch} /> :
        <LoginForm dispatch={props.dispatch} isProcessing={isProcessing} /> }

      <div className={styles.linkContainer}>
        <div>
          {isSignupFlow ?
            <Link to={getLoginLink(false)}>Sign In</Link> :
            <Link to={getSignupLink(false)}>Sign Up</Link>}
        </div>
        <div id={'forgotPassword'}>
          <a href={'#'} onClick={(event) => handleForgotPassword(event)}>Forgot password ...</a>
        </div>
      </div>

    </div>
  );
}

export default LoginPage
