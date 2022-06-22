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
import styles from './style.scss'

const App = () => {

  return (
     <div>
       <Helmet titleTemplate="%s - uConfy" defaultTitle="uConfy">
         <meta name="description" content="uConfy" />
       </Helmet>

       <div className={styles.center}>
         <Header />
         <Navigation navigationPath={[{ name: 'uConfy', uri: '/#/' }]} />
         <Switch>
           <Route exact path="/" component={LoginPage} />
           <Route exact path="/login" component={LoginPage} />
           <Route exact path="/device/create" component={AddDevicePage} />
           <Route exact path="/device" component={DeviceListPage} />
           <Route exact path="/device/:id" component={DevicePage} />
           <Route exact path="/device/:id/parameters" component={DevicePage} />
           <Route exact path="/device/:id/console" component={DevicePage} />
           <Route exact path="/device/:id/activity" component={DevicePage} />
           <Route path="" component={NotFoundPage} />
         </Switch>
       </div>
     </div>
   );
}

export default App;
