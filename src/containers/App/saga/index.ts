import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getDefault } from '../actions';
import { DEFAULT_SAGA } from '../constants';

function* getDefaultSaga() {
  try {
    yield put(getDefault(20));
  } catch {
    //
  } finally {
    //
  }
}

export default function* aboutPageSaga() {
  yield takeLatest(DEFAULT_SAGA, getDefaultSaga);
}
