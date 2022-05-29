import { NavigationPathItem } from './model';

export const SET_NAVIGATION_ITEMS = 'set_navigation_items';

export function setNavigation(pathItems: Array<NavigationPathItem>) {
  return {
    type: SET_NAVIGATION_ITEMS,
    payload: {
      pathItems
    }
  };
}
