import { fromJS } from 'immutable';
import { FETCH_DEVICES_RESPONSE_RECEIVED } from './actions'

const initialState = fromJS({
  error: false,
});

function deviceListPageReducer(state = initialState, action: any) {

  switch (action.type) {
    case FETCH_DEVICES_RESPONSE_RECEIVED:

      return {
        ...state,
        devicesData: action.payload
      }
    default:
      return state;
  }
}

export default deviceListPageReducer;
