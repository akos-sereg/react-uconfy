import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_DEVICE, FETCH_DEVICE_RESPONSE_RECEIVED, DELETE_DEVICE, fetchDeviceDetailsReceived } from './actions';
import { getDeviceListUri } from '../../services/UrlService'
import { devicesReceived } from '../../containers/DeviceListPage/actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
import { sleep } from '../../services/SleepUtils'
import { DB_PROPAGATION_SECONDS } from '../../utils/constants'
import * as toastr from 'toastr'

export function *fetchDeviceDetails(action: any): any {
  const deviceDetailsResponse = yield UconfyDevicesApi.instance.getDevice(action.payload)
  if (deviceDetailsResponse.success) {
    yield put(fetchDeviceDetailsReceived(action.payload, deviceDetailsResponse))
  }
}

export function *deleteDevice(action: any): any {
  const deleteResponse = yield UconfyDevicesApi.instance.deleteDevice(action.payload)
  if (deleteResponse.success) {
    yield sleep(DB_PROPAGATION_SECONDS)

    document.location.href = getDeviceListUri()
    /*const devicesResult = yield UconfyDevicesApi.instance.getDevices()
    if (!devicesResult.success) {
      toastr['warning']('Server error, please try again')
      return
    }

    console.log('dispatching devices received: ', devicesResult.responseData)
    yield put(devicesReceived(devicesResult.responseData))*/
  }

  yield
}

export default function* rootSaga() {
  yield [
    takeEvery(FETCH_DEVICE, fetchDeviceDetails),
    takeEvery(DELETE_DEVICE, deleteDevice),
  ];
}
