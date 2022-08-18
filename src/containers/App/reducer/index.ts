import produce from 'immer';
import { Reducer, AnyAction } from '@reduxjs/toolkit';
import { DepotState } from '../types';
import { LOGIN_SUCCESS } from '../constants';

export const initialState = {
  user: {},
};

const aboutReducer: Reducer<DepotState, AnyAction> = (
  state = initialState,
  action,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        console.log(action.payload);
    }
  });
export default aboutReducer;
