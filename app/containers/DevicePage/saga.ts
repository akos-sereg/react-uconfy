import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_DEVICE } from './actions';
import {
  // devicesReceived
} from './actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
import * as toastr from 'toastr'

export function *fetchDeviceDetails(action: any): any {
  console.log('fetch device details')
  console.log(action)
  yield
}

export default function* rootSaga() {
  yield [
    takeLatest(FETCH_DEVICE, fetchDeviceDetails),
  ];
}
