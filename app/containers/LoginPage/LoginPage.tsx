import * as React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import TextInput from '../../components/TextInput'
import {eraseLoginErrorMessage, login} from './actions'
import styles from './style.scss'
import {Link} from "react-router-dom";
import {getSignupLink} from "../../services/UrlService";
import NotificationBar, {NotificationListener} from "../../components/NotificationBar/NotificationBar";

type Props = {
  dispatch: Function
  isProcessing: boolean
  loginErrorMessage: string
};

const LoginPage = (props: Props) => {

  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const { isProcessing } = props
  const notification = new NotificationListener()

  const handleSignIn = (event: any) => {
    event.preventDefault()
    props.dispatch(login(loginForm.username, loginForm.password))
  }

  const handlePasswordKeyUp = (event: any) => {
    event.preventDefault()
    if (event.key === 'Enter') {
      handleSignIn(event)
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
    }
  }

  const notificationClosed = () => {
    console.log('--> notificationClosed')
    props.dispatch(eraseLoginErrorMessage())
  }

  return (
    <div className={styles.container}>
      <Helmet>
        <title>uConfy - Login</title>
        <meta
          name="description"
          content="uConfy"
        />
      </Helmet>

      <table className={styles.loginFormTable}>
        <tbody>
          <tr>
            <td id="titleColumn">
              Username
            </td>
            <td>
              <div className="input-group">
                <TextInput disabled={isProcessing} name={'username'} onChange={handleTextChange} />
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.titleColumn}>
              Password
            </td>
            <td>
              <div className="input-group">
                <TextInput
                  disabled={isProcessing}
                  name={'password'}
                  type={"password"}
                  onChange={handleTextChange}
                  onKeyUp={handlePasswordKeyUp}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.titleColumn}>
            </td>
            <td>
              <button
                disabled={isProcessing}
                onClick={(e) => handleSignIn(e)}
                type="button"
                className="btn btn-default navbar-btn">
                Sign in
              </button>
              <p>
                <a href={'#'}>Forgot password ...</a>
              </p>
              <p>
                <Link to={getSignupLink(false)}>Sign up ...</Link>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <NotificationBar handle={notification} onClose={notificationClosed} />
    </div>
  );
}

export default LoginPage
