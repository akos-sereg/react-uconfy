/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import FontFaceObserver from 'fontfaceobserver';
import { setNavigation } from 'components/Navigation/actions';
import createHistory from 'history/createBrowserHistory';
import UconfyBackendApi from 'services/UconfyBackendApi'
import UconfyLoginApi from 'services/UconfyLoginApi'
import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// Import root app
import App from 'containers/App';

// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
import 'styles/theme.scss';

import configureStore from './configureStore';
import {getDeviceListUri, getMarketingPage} from "./services/UrlService";
import config from "./services/Config";
import {login} from "./containers/LoginPage/actions";

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const updateLocation = () => {
  switch (document.location.hash) {
    case '#/login':
    case '#/':
      store.dispatch(setNavigation([
           { name: 'uConfy', uri: getMarketingPage() },
           { name: 'Login' },
         ]));
      break;

    case '#/signup':
      store.dispatch(setNavigation([
        { name: 'uConfy', uri: getMarketingPage() },
        { name: 'Signup' },
      ]));
      break;

    case '#/device/create':
      store.dispatch(setNavigation([
           { name: 'uConfy', uri: getMarketingPage() },
           { name: 'Devices', uri: getDeviceListUri() },
           { name: 'Create Device' },
         ]));
      break;

    case '#/device':
      store.dispatch(setNavigation([
           { name: 'uConfy', uri: getMarketingPage() },
           { name: 'Devices' },
         ]));
      break;
  }
}

history.listen(updateLocation);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      {/* <LanguageProvider messages={messages}> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </LanguageProvider> */}
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();

if (document.location.hash.indexOf('demologin=1') !== -1) {
  store.dispatch(login(config.demoUser, ''))
} else {
  // autologin, if jwt token is available
  if (UconfyBackendApi.getJwtToken()) {
    UconfyLoginApi.instance.getMe()

    // store requested location, so that later - once app state is loaded from backend - we can navigate there
    // see DeviceListPage/saga.ts, fetchDevices
    localStorage.setItem('requested_hash', document.location.hash)

    // ... but first, navigate to device list page, so that device list can be fetched from backend first
    document.location.href = getDeviceListUri()
  } else {
    updateLocation();
  }


}
