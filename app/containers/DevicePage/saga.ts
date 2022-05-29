import { put, takeEvery } from 'redux-saga/effects';
import { SET_NAVIGATION_ITEMS } from '../../components/Navigation/actions';
import {
  // devicesReceived
} from './actions'
import UconfyDevicesApi from '../../services/UconfyDevicesApi';
import * as toastr from 'toastr'

export function *onNavigationUpdated(action: any): any {

}

export default function* rootSaga() {
  yield [
    takeEvery(SET_NAVIGATION_ITEMS, onNavigationUpdated),
  ];
}
