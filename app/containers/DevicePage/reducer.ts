import { fromJS } from 'immutable';
import AuthorApi from '../../services/AuthorApi';
import { FETCH_DEVICE } from './actions'

const initialState = fromJS({
  error: false,
});

function devicePageReducer(state = initialState, action: any) {
  switch (action.type) {

    default:
      return state;
  }
}

export default devicePageReducer;
