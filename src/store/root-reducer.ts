import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import articles from '../features/articles/reducer';
import devices from '../features/devices/reducer';

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    articles,
    devices
  });

export default rootReducer;
