import { put, takeLatest } from 'redux-saga/effects';
import { SET_NAVIGATION_ITEMS } from './actions';

export function* setNavigationItems(action: any): any {
  // yield put(navigationItemAdded());
  yield;
}

export default function* rootSaga() {
  yield [
    takeLatest(SET_NAVIGATION_ITEMS, setNavigationItems),
  ];
}
