import {useState} from "react";
import NotificationBar, {NotificationListener} from "../../components/NotificationBar/NotificationBar";
import {isMobile} from "../../services/Environment";
import stylesForMobile from "./style.mobile.scss";
import stylesForWeb from "./style.scss";
import UconfyLoginApi from "../../services/UconfyLoginApi";
import {getDeviceListUri} from "../../services/UrlService";
import {eraseLoginErrorMessage} from "./actions";
import {Helmet} from "react-helmet";
import Logo from "../../components/Header/images/logo.png";
import TextInput from "../../components/TextInput";
import * as React from "react";

interface Props {
  dispatch: Function
}

const SignupForm = (props: Props) => {
  const [loginForm, setLoginForm] = useState({ username: '', password: '', passwordConfirmation: '', registrationCode: '' })
  const [registrationCodeStatus, setRegistrationCodeStatus] = useState({ sent: false })
  const [signupInProgress, setSignupInProgress] = useState(false)
  const notification = new NotificationListener()
  const styles = isMobile() ? stylesForMobile : stylesForWeb

  const handleSignup = async (event: any) => {
    event.preventDefault()
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
        setRegistrationCodeStatus((prevState => ({ ...prevState, sent: true })))
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

  const handleSignupWithRegistrationCode = async (event: any) => {
    event.preventDefault()
    const { username, registrationCode } = loginForm

    try {
      setSignupInProgress(true)
      const verifyEmailResponse = await UconfyLoginApi.instance.completeSignup(username, registrationCode)
      if (verifyEmailResponse.success) {
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

  const handlePasswordKeyUp = (event: any) => {
    event.preventDefault()
    if (event.key === 'Enter') {
      handleSignup(event)
    }
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
      case 'registration-code':
        setLoginForm({ ...loginForm, registrationCode: event.target.value })
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
            Email
          </div>
          <div className={styles.inputField}>
            <TextInput
              name={'username'}
              placeholder={'email'}
              onChange={handleTextChange}
              disabled={registrationCodeStatus.sent}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.label}>
            Password
          </div>
          <div className={styles.inputField}>
            <TextInput
              name={'password'}
              type={"password"}
              placeholder={'password'}
              onChange={handleTextChange}
              onKeyUp={handlePasswordKeyUp}
              disabled={registrationCodeStatus.sent}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.label}>
            Confirm Password
          </div>
          <div className={styles.inputField}>
            <TextInput
              name={'password-confirmation'}
              type={"password"}
              placeholder={'password confirmation'}
              onChange={handleTextChange}
              onKeyUp={handlePasswordKeyUp}
              disabled={registrationCodeStatus.sent}
            />
          </div>
        </div>

        {registrationCodeStatus.sent &&
          <div className={styles.inputContainer}>
            <div className={styles.label}>
              Email Registration Code
            </div>
            <div className={styles.inputField}>
              <TextInput
                name={'registration-code'}
                type={"text"}
                placeholder={'registration code sent in email'}
                onChange={handleTextChange}
                onKeyUp={handlePasswordKeyUp}
              />
            </div>
          </div>
        }

        {!registrationCodeStatus.sent &&
        <button
          disabled={signupInProgress}
          onClick={(e) => handleSignup(e)}
          type="button"
          className={styles.loginButton}>
          Sign Up
        </button>
        }

        {registrationCodeStatus.sent &&
          <button
            disabled={signupInProgress}
            onClick={(e) => handleSignupWithRegistrationCode(e)}
            type="button"
            className={styles.loginButton}>
            Complete Sign Up
          </button>
        }

      </div>
    </div>
  );
}


export default SignupForm
