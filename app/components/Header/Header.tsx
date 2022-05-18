import * as React from 'react'
import { Link } from 'react-router-dom'
import UconfyBackendApi from '../../services/UconfyBackendApi'
import Logo from './images/logo.png'
import styles from './style.scss'

const Header = () => {

  const handleLogout = () => {
    UconfyBackendApi.setJwtToken(null)
    location.href = '/#/'
  }

  return (
    <table width="100%">
      <tbody>
          <tr>
              <td>
                  <a href="/"><img src={Logo} width="80" /></a>
                  <span className={styles.uconfy_logo}>µConfy</span>
              </td>
              <td align="right">
                  <Link to="/" className={styles.nav_link}>Home</Link>
                  <a className={styles.nav_link} href="https://github.com/akos-sereg/esp32-uconfy-component/wiki" target="_blank">Documentation</a>
                  <a className={styles.nav_link} onClick={handleLogout}>Logout</a>
              </td>
          </tr>
      </tbody>
    </table>
  );
};

export default Header;
