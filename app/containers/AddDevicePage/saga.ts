import { put, takeLatest } from 'redux-saga/effects';
import { getDeviceListUri } from '../../services/UrlService'
import { CREATE_DEVICE } from './actions';
import { devicesReceived } from '../../containers/DeviceListPage/actions'
import {
  // devicesReceived
} from './actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
import * as toastr from 'toastr'

export function *createDevice(action: any): any {
  const result = yield UconfyDevicesApi.instance.createDevice(action.payload.name, action.payload.platform)
  if (result.success) {
    const devicesResult = yield UconfyDevicesApi.instance.getDevices()
    if (!devicesResult.success) {
      toastr['warning']('Server error, please try again')
      return
    }

    yield put(devicesReceived(devicesResult.responseData))
    document.location.href = getDeviceListUri()
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(CREATE_DEVICE, createDevice),
  ];
}
