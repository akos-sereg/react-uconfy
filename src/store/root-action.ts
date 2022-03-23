import { routerActions } from 'connected-react-router';
import * as articlesActions from '../features/articles/actions';
import * as devicesActions from '../features/devices/actions';

export default {
  router: routerActions,
  articles: articlesActions,
  devices: devicesActions,
};
