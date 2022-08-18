import produce from 'immer';
import { Reducer, AnyAction } from '@reduxjs/toolkit';
import { DepotState } from '../types';
import { DEFAULT } from '../constants';

export const initialState = {
  count: 0,
};

const aboutReducer: Reducer<DepotState, AnyAction> = (
  state = initialState,
  action,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT:
        console.log('aaa');
    }
  });
export default aboutReducer;
