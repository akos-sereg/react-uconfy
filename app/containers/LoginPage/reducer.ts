import { fromJS } from 'immutable';
import {
  ERASE_LOGIN_ERROR_MESSAGE,
  LOGIN_ERROR,
  LOGIN_REQUEST_SENT,
  LOGIN_RESPONSE_RECEIVED
} from './actions';

const initialState = fromJS({
});

function loginReducer(state = initialState, action: any) {
  switch (action.type) {
    case ERASE_LOGIN_ERROR_MESSAGE:
      console.log('--> erasing error message')
      return {
        ...state,
        loginErrorMessage: null
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loginErrorMessage: action.payload.loginErrorMessage
      }

    case LOGIN_REQUEST_SENT:
      return {
        ...state,
        isProcessing: true
      }

    case LOGIN_RESPONSE_RECEIVED:
      return {
        ...state,
        isProcessing: false
      }

    default:
      return state;
  }
}

export default loginReducer;
