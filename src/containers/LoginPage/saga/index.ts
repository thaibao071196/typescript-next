import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOGIN_SAGA } from '../constants';
import { dataUserLogin, LoginSaga } from '../types';
import { onLoginSuccess } from '../../App/actions';

import { repositoryFactory } from '../../../repositories/repositoryFactory';
const loginRepository = repositoryFactory.get('login');

function* onLoginSaga({ payload }: LoginSaga) {
  try {
    const data: dataUserLogin = yield call(loginRepository.handleLogin, {
      email: payload.email,
      password: payload.password,
    });

    if (data.errCode === 1) {
      return true;
    }

    const { email, roleId } = data.user;

    console.log(email, roleId);

    /// test ting ne

    yield put(
      onLoginSuccess({
        email,
        roleId,
      }),
    );
  } catch (e) {
    console.log(e);
    //
  } finally {
    //
  }
}

export default function* aboutPageSaga() {
  yield takeLatest(LOGIN_SAGA, onLoginSaga);
}
