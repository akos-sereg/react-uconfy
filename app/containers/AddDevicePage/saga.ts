import { put, takeLatest } from 'redux-saga/effects';
import { CREATE_DEVICE } from './actions';
import {
  // devicesReceived
} from './actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
// import * as toastr from 'toastr'

export function *createDevice(action: any): any {
  yield
}

export default function* rootSaga() {
  yield [
    takeLatest(CREATE_DEVICE, createDevice),
  ];
}
