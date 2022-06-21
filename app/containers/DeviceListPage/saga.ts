import { put, takeEvery } from 'redux-saga/effects';
import {
  devicesReceived, FETCH_DEVICES, fetechDevices
} from './actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
import * as toastr from 'toastr'

export function *fetchDevices(action: any): any {
  const result = yield UconfyDevicesApi.instance.getDevices()
  if (!result.success) {
    toastr['warning']('Server error, please try again')
    return
  }

  yield put(devicesReceived(result.responseData))
}

export default function* rootSaga() {
  yield [
    takeEvery(FETCH_DEVICES, fetchDevices)
  ];
}
