import * as React from 'react';
import styles from "../LoginPage/style.scss";
import TextInput from "../../components/TextInput";
import {Link} from "react-router-dom";
import {getDeviceListUri, getLoginLink} from "../../services/UrlService";
import {useState} from "react";
import UconfyLoginApi from "../../services/UconfyLoginApi";

const SignupPage = () => {
  const [signupInProgress, setSignupInProgerss] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSignup = async () => {
    if (password === '' || password.length <= 5) {
      alert('Password must be at least 6 characters long')
      return
    }

    if (password != passwordConfirmation) {
      alert('Password mismatch')
      return
    }

    try {
      setSignupInProgerss(true)
      const signupResponse = await UconfyLoginApi.instance.register(username, password)
      if (signupResponse.success) {
        location.href = getDeviceListUri()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setSignupInProgerss(false)
    }
  }

  return  <>
    <table className={styles.loginFormTable}>
      <tbody>
      <tr>
        <td id="titleColumn">
          Username
        </td>
        <td>
          <div className="input-group">
            <TextInput name={'username'} onChange={(e) => setUsername(e.target.value)} />
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
              name={'password'}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </td>
      </tr>
      <tr>
        <td className={styles.titleColumn}>
          Confirm Password
        </td>
        <td>
          <div className="input-group">
            <TextInput
              name={'password-confirmation'}
              type={"password"}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </td>
      </tr>
      <tr>
        <td className={styles.titleColumn}>
        </td>
        <td>
          <button
            onClick={handleSignup}
            disabled={signupInProgress}
            type="button"
            className="btn btn-default navbar-btn">
            Sign up
          </button>
          <p>
            <Link to={getLoginLink(false)}>Sign in ...</Link>
          </p>
        </td>
      </tr>
      </tbody>
    </table>
  </>
}

export default SignupPage;
