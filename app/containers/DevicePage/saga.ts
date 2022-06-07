import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_DEVICE, DELETE_DEVICE } from './actions';
import { getDeviceListUri } from '../../services/UrlService'
import { devicesReceived } from '../../containers/DeviceListPage/actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
import * as toastr from 'toastr'

export function *fetchDeviceDetails(action: any): any {
  console.log('fetch device details')
  console.log(action)
  yield
}

export function *deleteDevice(action: any): any {
  const deleteResponse = yield UconfyDevicesApi.deleteDevice(action.payload)
  if (deleteResponse.success) {
    const devicesResult = yield UconfyDevicesApi.getDevices()
    if (!devicesResult.success) {
      toastr['warning']('Server error, please try again')
      return
    }

    yield put(devicesReceived(devicesResult.responseData))
    document.location.href = getDeviceListUri()
  }

  yield
}

export default function* rootSaga() {
  yield [
    takeLatest(FETCH_DEVICE, fetchDeviceDetails),
    takeLatest(DELETE_DEVICE, deleteDevice),
  ];
}
