import { fromJS } from 'immutable';
import {NOTIFICATION_MESSAGE} from "./actions";

const initialState = fromJS({
  error: false,
});

function notificationBarReducer(state = initialState, action: any) {

  switch (action.type) {
    case NOTIFICATION_MESSAGE:

      return {
        ...state,
      }
    default:
      return state;
  }
}

export default notificationBarReducer;
