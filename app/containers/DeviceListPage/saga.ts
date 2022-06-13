import { put, takeEvery } from 'redux-saga/effects';
import { SET_NAVIGATION_ITEMS } from '../../components/Navigation/actions';
import {
  devicesReceived
} from './actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
import * as toastr from 'toastr'

export function *onNavigationUpdated(action: any): any {

  if (action.payload.pathItems[action.payload.pathItems.length - 1].name !== 'Devices') {
    return;
  }

  const result = yield UconfyDevicesApi.instance.getDevices()
  if (!result.success) {
    toastr['warning']('Server error, please try again')
    return
  }

  yield put(devicesReceived(result.responseData))
}

export default function* rootSaga() {
  yield [
    takeEvery(SET_NAVIGATION_ITEMS, onNavigationUpdated),
  ];
}
