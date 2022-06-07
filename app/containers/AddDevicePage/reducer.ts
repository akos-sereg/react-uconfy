import { fromJS } from 'immutable';
import { CREATE_DEVICE } from './actions'

const initialState = fromJS({
  error: false,
});

function addDevicePageReducer(state = initialState, action: any) {
  switch (action.type) {

    default:
      return state;
  }
}

export default addDevicePageReducer;
