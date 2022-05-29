import { fromJS } from 'immutable';
import AuthorApi from '../../services/AuthorApi';
import { FETCH_DEVICES_RESPONSE_RECEIVED } from './actions'

const initialState = fromJS({
  error: false,
});

function deviceListPageReducer(state = initialState, action: any) {

  switch (action.type) {

    default:
      return state;
  }
}

export default deviceListPageReducer;
