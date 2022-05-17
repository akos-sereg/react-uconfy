import { fromJS } from 'immutable';
import AuthorApi from '../../services/AuthorApi';
import { LOGIN } from './actions';

const initialState = fromJS({
});

function loginReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN:
      return state;
      break;

    default:
      return state;
  }
}

export default loginReducer;
