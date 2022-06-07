import { fromJS } from 'immutable';
import AuthorApi from '../../services/AuthorApi';
import { FETCH_DEVICE } from './actions'

const initialState = fromJS({
  error: false,
});

function deviceListPageReducer(state = initialState, action: any) {
  console.log('event: ' + action.type)
  switch (action.type) {

    default:
      return state;
  }
}

export default deviceListPageReducer;
