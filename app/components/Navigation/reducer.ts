import { fromJS } from 'immutable';
import AuthorApi from '../../services/AuthorApi';
import { NavigationPathItem } from './model';

import {
  SET_NAVIGATION_ITEMS,
} from './constants';

const initialState = fromJS({
  navigationPath: [],
});

function navigationReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_NAVIGATION_ITEMS:
      return {
        ...state,
        navigationPath: action.payload.pathItems
      };

    default:
      return state;
  }
}

export default navigationReducer;
