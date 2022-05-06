import { put, takeLatest } from 'redux-saga/effects';
import AuthorApi from '../../services/AuthorApi';

export function* getAuthors() {
  yield put({ type: '' });
}

export default function* rootSaga() {
  yield [
    takeLatest('sadfasdf', getAuthors),
  ];
}
