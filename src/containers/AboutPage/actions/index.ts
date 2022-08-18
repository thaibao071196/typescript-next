import { DEFAULT, DEFAULT_SAGA } from '../constants';
import { DepotState } from '../types';

export const getDefault = (payload: DepotState['count']) => ({
  type: DEFAULT,
  payload,
});

export const getDefaultSaga = () => ({
  type: DEFAULT_SAGA,
});
