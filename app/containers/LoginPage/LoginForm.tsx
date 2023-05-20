import Logo from "../../components/Header/images/logo.png";
import TextInput from "../../components/TextInput";
import * as React from "react";
import {isMobile} from "../../services/Environment";
import stylesForMobile from "./style.mobile.scss";
import stylesForWeb from "./style.scss";
import {useState} from "react";
import {login} from "./actions";
import LoginPage from "./LoginPage";
import {NotificationListener} from "../../components/NotificationBar/NotificationBar";

interface Props {
  dispatch: Function,
  isProcessing: boolean
}

const LoginForm = (props: Props) => {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const styles = isMobile() ? stylesForMobile : stylesForWeb
  const { isProcessing } = props


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

  return <div className={styles.container}>
    <h1>Log in to your account</h1>
    <a href="/"><img src={Logo} width="180" /></a>
    <div className={styles.inputContainer}>
      <div className={styles.label}>
        Email
      </div>
      <div className={styles.inputField}>
        <TextInput disabled={isProcessing} name={'username'} placeholder={'email'} onChange={handleTextChange} />
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

    <button
      data-automation-id={'login-button'}
      disabled={isProcessing}
      onClick={(e) => handleSignIn(e)}
      type="button"
      className={styles.loginButton}>
      Sign In
    </button>
  </div>
}


export default LoginForm
