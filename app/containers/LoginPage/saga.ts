import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN } from './actions';
import AuthorApi from '../../services/AuthorApi';
import UconfyLoginApi from '../../services/UconfyLoginApi';

export function* doLogin(loginAction: any): any {

  UconfyLoginApi.login(loginAction.payload.username, loginAction.payload.password)
    .then((result) => {
      console.log('login result: ', result);
    });


  yield;
}

export default function* rootSaga() {
  yield [
    takeLatest(LOGIN, doLogin),
  ];
}
