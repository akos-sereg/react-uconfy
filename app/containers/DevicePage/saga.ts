import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_DEVICE, DELETE_DEVICE, fetchDeviceDetailsReceived } from './actions';
import { getDeviceListUri } from '../../services/UrlService'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';

export function *fetchDeviceDetails(action: any): any {
  const deviceDetailsResponse = yield UconfyDevicesApi.instance.getDevice(action.payload)
  if (deviceDetailsResponse.success) {
    yield put(fetchDeviceDetailsReceived(action.payload, deviceDetailsResponse))
  }
}

export function *deleteDevice(action: any): any {
  const deleteResponse = yield UconfyDevicesApi.instance.deleteDevice(action.payload)
  if (deleteResponse.success) {
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
