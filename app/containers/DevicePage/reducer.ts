import { fromJS } from 'immutable';

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
