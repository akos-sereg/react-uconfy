import { Device } from 'MyModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import {
  loadDevicesAsync,
} from './actions';

const reducer = combineReducers({
  isLoadingDevices: createReducer(false as boolean)
    .handleAction([loadDevicesAsync.request], (state, action) => true)
    .handleAction(
      [loadDevicesAsync.success, loadDevicesAsync.failure],
      (state, action) => false
    ),
  devices: createReducer([] as Device[])
    .handleAction([loadDevicesAsync.success], (state, action) => action.payload
  ),
});

export default reducer;
