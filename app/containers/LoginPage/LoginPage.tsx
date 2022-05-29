import * as React from 'react'
import { Component, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import TextInput from '../../components/TextInput'
import UconfyBackendApi from '../../services/UconfyBackendApi'
import { setNavigation } from '../../components/Navigation/actions'
import { login } from './actions'
import styles from './style.scss'

type Props = {
  // dispatch to props
  dispatch: Function,

  // state to props
  isProcessing: boolean
};

type State = {
  username: string,
};

const LoginPage = (props: Props) => {

  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const { isProcessing } = props

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

  return (
    <div>
      <Helmet>
        <title>Main Page</title>
        <meta
          name="description"
          content="Main page of React.js Boilerplate application"
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LoginPage
