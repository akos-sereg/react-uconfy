import { fromJS } from 'immutable';
import AuthorApi from '../../services/AuthorApi';

/*import {
  FETCH_AUTHORS,
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_ERROR,
  DELETE_AUTHOR_SUCCESS,
} from './constants';*/

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
