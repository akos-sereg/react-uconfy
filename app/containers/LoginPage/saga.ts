import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST_SENT, loginResponseReceived, loginSuccess } from './actions';
import AuthorApi from '../../services/AuthorApi';
import UconfyLoginApi from '../../services/UconfyLoginApi';

export function* doLogin(loginAction: any): any {

  try {
    const result = yield UconfyLoginApi.login(loginAction.payload.username, loginAction.payload.password);

    yield put(loginSuccess(
      loginAction.payload.apiKey,
      loginAction.payload.email,
      loginAction.payload.role,
      loginAction.payload.token,
      loginAction.payload.userID));

    location.href = '/#/devices';
  } catch (error) {
  } finally {
    yield put(loginResponseReceived());
  }

  yield;
}

export default function* rootSaga() {
  yield [
    takeLatest(LOGIN_REQUEST_SENT, doLogin),
  ];
}
