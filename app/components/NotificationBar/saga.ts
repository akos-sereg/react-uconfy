import { put, takeEvery } from 'redux-saga/effects';
import {FETCH_DEVICES} from "../../containers/DeviceListPage/actions";

export function *onMessage(action: any): any {
}

export default function* rootSaga() {
  yield [
    takeEvery(FETCH_DEVICES, onMessage)
  ];
}
