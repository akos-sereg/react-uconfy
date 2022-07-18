import * as React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import TextInput from '../../components/TextInput'
import {eraseLoginErrorMessage, login} from './actions'
import stylesForWeb from './style.scss'
import stylesForMobile from './style.mobile.scss'
import {Link} from "react-router-dom"
import {getDeviceListUri, getLoginLink, getSignupLink} from "../../services/UrlService"
import NotificationBar, {NotificationListener} from "../../components/NotificationBar/NotificationBar"
import {isMobile} from "../../services/Environment"
import Logo from "../../components/Header/images/logo.png";
import UconfyLoginApi from "../../services/UconfyLoginApi";

type Props = {
  dispatch: Function
  isProcessing: boolean
  loginErrorMessage: string
};

const LoginPage = (props: Props) => {

  const [loginForm, setLoginForm] = useState({ username: '', password: '', passwordConfirmation: '' })
  const [signupInProgress, setSignupInProgress] = useState(false)
  const { isProcessing } = props
  const notification = new NotificationListener()
  const styles = isMobile() ? stylesForMobile : stylesForWeb
  const isSignupFlow = ['#/signup'].includes(document.location.hash)

  const handleSignup = async () => {
    const { username, password, passwordConfirmation } = loginForm
    if (password === '' || password.length <= 5) {
      notification.showMessage('Password must be at least 6 characters long')
      return
    }

    if (password != passwordConfirmation) {
      notification.showMessage('Password mismatch')
      return
    }

    try {
      setSignupInProgress(true)
      const signupResponse = await UconfyLoginApi.instance.register(username, password)
      if (signupResponse.success) {
        location.href = getDeviceListUri()
      } else {
        notification.showMessage('Whoops, cant signup now, sorry. Try again later.')
      }
    } catch (error) {
      notification.showMessage('Unexpected error occurred. Try again later.')
      console.error(error)
    } finally {
      setSignupInProgress(false)
    }
  }

  const handleForgotPassword = (event: any) => {
    event.preventDefault()
    alert ('not implemented yet')
  }

  const handleSignInOrSignUp = (event: any) => {
    event.preventDefault()

    if (isSignupFlow) {
      handleSignup()
    } else {
      props.dispatch(login(loginForm.username, loginForm.password))
    }
  }

  const handlePasswordKeyUp = (event: any) => {
    event.preventDefault()
    if (event.key === 'Enter') {
      handleSignInOrSignUp(event)
    }
  }

  if (props.loginErrorMessage && props.loginErrorMessage != '') {
    notification.showMessage(props.loginErrorMessage)
  }


  const handleTextChange = (event: any) => {
    switch (event.target.name) {
      case 'username':
        setLoginForm({ ...loginForm, username: event.target.value })
        break;
      case 'password':
        setLoginForm({ ...loginForm, password: event.target.value })
        break
      case 'password-confirmation':
        setLoginForm({ ...loginForm, passwordConfirmation: event.target.value })
        break
    }
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

      <div className={styles.container}>
        <h1>Log in to your account</h1>
        <a href="/"><img src={Logo} width="180" /></a>
        <div className={styles.inputContainer}>
          <div className={styles.label}>
            Username
          </div>
          <div className={styles.inputField}>
            <TextInput disabled={isProcessing} name={'username'} placeholder={'username'} onChange={handleTextChange} />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.label}>
            Password
          </div>
          <div className={styles.inputField}>
            <TextInput
              disabled={isProcessing}
              name={'password'}
              type={"password"}
              placeholder={'password'}
              onChange={handleTextChange}
              onKeyUp={handlePasswordKeyUp}
            />
          </div>
        </div>

        {isSignupFlow && <div className={styles.inputContainer}>
          <div className={styles.label}>
            Confirm Password
          </div>
          <div className={styles.inputField}>
            <TextInput
              disabled={isProcessing}
              name={'password-confirmation'}
              type={"password"}
              placeholder={'password confirmation'}
              onChange={handleTextChange}
              onKeyUp={handlePasswordKeyUp}
            />
          </div>
        </div>}

        <button
          disabled={isProcessing || signupInProgress}
          onClick={(e) => handleSignInOrSignUp(e)}
          type="button"
          className={styles.loginButton}>
          {isSignupFlow ? 'Sign Up' : 'Sign In'}
        </button>
      </div>

      <div className={styles.linkContainer}>
        <div>
          {isSignupFlow ?
            <Link to={getLoginLink(false)}>Sign In</Link> :
            <Link to={getSignupLink(false)}>Sign Up</Link>}

        </div>
        <div id={'forgotPassword'}>
          <a href={'#'} onClick={handleForgotPassword}>Forgot password ...</a>
        </div>
      </div>

    </div>
  );
}

export default LoginPage
