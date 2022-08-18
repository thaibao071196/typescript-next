import { LOGIN_SAGA } from '../constants';
import { DepotState } from '../types';

export const onLoginSaga = (payload: DepotState['login']) => ({
  type: LOGIN_SAGA,
  payload,
});
