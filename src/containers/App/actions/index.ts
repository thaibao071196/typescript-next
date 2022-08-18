import { DEFAULT, DEFAULT_SAGA, LOGIN_SUCCESS } from '../constants';
import { DepotState, User } from '../types';

export const getDefault = (payload: DepotState) => ({
  type: DEFAULT,
  payload,
});

export const getDefaultSaga = () => ({
  type: DEFAULT_SAGA,
});

export const onLoginSuccess = (payload: User) => ({
  type: LOGIN_SUCCESS,
  payload,
});
