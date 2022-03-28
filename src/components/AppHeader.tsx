import React from 'react';
import areEqual from 'fast-deep-equal';
import logo from '../assets/ucontroller-small.png';

import './AppHeader.css';
// import { Link } from 'react-router-dom';

interface Props {}

const AppHeader = React.memo<Props>(() => {
  return (
    <>
        <table id="app_navbar" className="fullwidth">
            <tbody className="fullwidth">
                <tr>
                    <td>
                        <a href="/"><img src={logo} width="80" alt="uConfy logo" /></a>
                        <span className="uconfy_logo uconfy_logo_black">&micro;Confy</span>
                    </td>
                    <td align="right">
                        <a className="nav_link" href="/#">Home</a>
                        <a className="nav_link" href="https://github.com/akos-sereg/esp32-uconfy-component/wiki" rel="noopener noreferrer" target="_blank">Documentation</a>
                        <a className="nav_link" href="/#">Logout</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  );
}, areEqual);

export default AppHeader;