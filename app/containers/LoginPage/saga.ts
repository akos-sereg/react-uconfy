import { put, takeLatest } from 'redux-saga/effects'
import { getDeviceListUri } from '../../services/UrlService'
import { LOGIN_REQUEST_SENT, loginResponseReceived, loginSuccess } from './actions'
import UconfyLoginApi from '../../services/UconfyLoginApi'
import * as toastr from 'toastr'

export function* doLogin(loginAction: any): any {

  try {
    const result = yield UconfyLoginApi.instance.login(loginAction.payload.username, loginAction.payload.password);

    if (result.success) {
      yield put(loginSuccess(
          result.apiKey,
          result.email,
          result.role,
          result.token,
          result.userID))

      // toastr['success']('Successfully logged in')
      location.href = getDeviceListUri()
    } else {
      toastr['warning']('Login failed')
    }

  } catch (error) {
  } finally {
    yield put(loginResponseReceived())
  }

  yield;
}

export default function* rootSaga() {
  yield [
    takeLatest(LOGIN_REQUEST_SENT, doLogin),
  ]
}
