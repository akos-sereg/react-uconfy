import * as React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, useLocation } from 'react-router-dom'

import LoginPage from 'containers/LoginPage/index'
import DeviceListPage from 'containers/DeviceListPage'
import DevicePage from 'containers/DevicePage'
import AddDevicePage from 'containers/AddDevicePage'
import NotFoundPage from 'containers/NotFoundPage'
import Header from 'components/Header'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import styles from './style.scss'

const App = () => {

  return (
     <div>
       <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
         <meta name="description" content="A React.js Boilerplate application" />
       </Helmet>

       <div className={styles.center}>
         <Header />
         <Navigation navigationPath={[{ name: 'uConfy', uri: '/#/' }]} />
         <Switch>
           <Route exact path="/" component={LoginPage} />
           <Route exact path="/login" component={LoginPage} />
           <Route exact path="/device/create" component={AddDevicePage} />
           <Route exact path="/device" component={DeviceListPage} />
           <Route path="/device/:id" component={DevicePage} />
           <Route path="" component={NotFoundPage} />
         </Switch>
       </div>
     </div>
   );
}

export default App;
