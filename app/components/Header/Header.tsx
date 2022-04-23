import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';
import './style.scss';

const Header = () => {
  return (
    <table width="100%">
      <tbody>
          <tr>
              <td>
                  <a href="/"><img src={Logo} width="80" /></a>
                  <span className="uconfy_logo">µConfy</span>
              </td>
              <td align="right">
                  <a className="nav_link" href="/#">Home</a>
                  <a className="nav_link" href="https://github.com/akos-sereg/esp32-uconfy-component/wiki" target="_blank">Documentation</a>
                  <a className="nav_link" href="/#">Logout</a>
              </td>
          </tr>
      </tbody>
    </table>
  );
};

export default Header;
