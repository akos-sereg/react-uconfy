import * as React from 'react'
import UconfyBackendApi from '../../services/UconfyBackendApi'
import Logo from './images/logo.png'
import stylesForWeb from './style.scss'
import stylesForMobile from './style.mobile.scss'
import {getMarketingPage} from "../../services/UrlService";
import {isMobile} from "../../services/Environment";

const Header = () => {
  const styles = isMobile() ? stylesForMobile : stylesForWeb

  const handleLogout = () => {
    UconfyBackendApi.setJwtToken(null)
    location.href = '/#/'
  }

  return (!isMobile() ?
    <table width="100%">
      <tbody>
          <tr>
              <td>
                <a href="/"><img src={Logo} width="80" /></a>
                <span className={styles.uconfy_logo}>µConfy</span>
              </td>
              <td align="right">
                <a className={styles.nav_link} href={getMarketingPage()}>Home</a>
                <a className={styles.nav_link} href="https://github.com/akos-sereg/esp32-uconfy-component/wiki" target="_blank">Documentation</a>
                <a className={styles.nav_link} onClick={handleLogout} tabIndex={0}>Logout</a>
              </td>

          </tr>
      </tbody>
    </table> :
      <>
        <div className={styles.title}>uConfy</div>
        <a className={styles.logoutButton} onClick={handleLogout} tabIndex={0}>Logout</a>
      </>

  )
}

export default Header;
