import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_DEVICE, DELETE_DEVICE } from './actions';
import { getDeviceListUri } from '../../services/UrlService'
import { devicesReceived } from '../../containers/DeviceListPage/actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
import { sleep } from '../../services/SleepUtils'
import { DB_PROPAGATION_SECONDS } from '../../utils/constants'
import * as toastr from 'toastr'

export function *fetchDeviceDetails(action: any): any {
  const deviceDetailsResponse = yield UconfyDevicesApi.getDevice(action.payload)
  if (deviceDetailsResponse.success) {
    console.log(deviceDetailsResponse)
  }
}

export function *deleteDevice(action: any): any {
  const deleteResponse = yield UconfyDevicesApi.deleteDevice(action.payload)
  if (deleteResponse.success) {
    yield sleep(DB_PROPAGATION_SECONDS)

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
    takeEvery(FETCH_DEVICE, fetchDeviceDetails),
    takeEvery(DELETE_DEVICE, deleteDevice),
  ];
}
