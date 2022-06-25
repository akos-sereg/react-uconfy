import {FETCH_DEVICE, FETCH_DEVICE_RESPONSE_RECEIVED} from './actions'
import { fromJS } from 'immutable';

const initialState = fromJS({
  error: false,
});

function devicePageReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_DEVICE: {
      return {
        ...state,
        currentDeviceConfig: null
      }
    }
    case FETCH_DEVICE_RESPONSE_RECEIVED:
      return {
        ...state,
        currentDeviceId: action.payload.deviceId,
        currentDeviceConfig: action.payload.deviceDetails.responseData
      }
    default:
      return state;
  }
}

export default devicePageReducer;
