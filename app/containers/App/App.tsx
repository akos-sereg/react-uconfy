import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'

import LoginPage from '../LoginPage/index'
import DeviceListPage from '../DeviceListPage'
import DevicePage from '../DevicePage'
import AddDevicePage from '../AddDevicePage'
import NotFoundPage from '../NotFoundPage'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import stylesForWeb from './style.scss'
import stylesForMobile from './style.mobile.scss'
import { isMobile } from "../../services/Environment";
import StatusPage from "../StatusPage/StatusPage";
import OfflineModeDevToolsWidget from '../../react-offline-mode/src/OfflineModeDevToolsWidget';

const App = () => {

  const styles = isMobile() ? stylesForMobile : stylesForWeb
  const isLoginPage = ['#/', '#/login', '#/signup'].includes(document.location.hash)

  return (
     <div className={isLoginPage ? styles.loginBody : styles.body}>
       <Helmet titleTemplate="%s - uConfy" defaultTitle="uConfy">
         <meta name="description" content="uConfy" />
       </Helmet>

       { /* <OfflineModeDevToolsWidget quotaInMb={ 5 } /> */ }

       <div className={styles.center}>
         {!isLoginPage && (
           <div className={styles.headerAndNavigation}>
             <Header />
             <Navigation navigationPath={[{ name: 'uConfy', uri: '/#/' }]} />
           </div>
         )}

         <Switch>
           <Route exact path="/" component={LoginPage} />
           <Route exact path="/status" component={StatusPage} />
           <Route exact path="/login" component={LoginPage} />
           <Route exact path="/signup" component={LoginPage} />
           <Route exact path="/device/create" component={AddDevicePage} />
           <Route exact path="/device" component={DeviceListPage} />
           <Route exact path="/device/:id" component={DevicePage} />
           <Route exact path="/device/:id/parameters" component={DevicePage} />
           <Route exact path="/device/:id/console" component={DevicePage} />
           <Route exact path="/device/:id/activity" component={DevicePage} />
           <Route exact path="/device/:id/command" component={DevicePage} />
           <Route path="" component={NotFoundPage} />
         </Switch>
       </div>
     </div>
   );
}

export default App;
