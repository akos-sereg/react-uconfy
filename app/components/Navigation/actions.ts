import {
  SET_NAVIGATION_ITEMS,
} from './constants';

import { NavigationPathItem } from './model';

export function setNavigation(pathItems: Array<NavigationPathItem>) {
  return {
    type: SET_NAVIGATION_ITEMS,
    payload: {
      pathItems
    }
  };
}
