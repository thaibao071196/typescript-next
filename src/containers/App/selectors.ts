import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './reducer';
import { DepotState } from './types';

const selectState = (state: { aboutPage: DepotState }) =>
  state.aboutPage || initialState;

export const makeSelectInitValue = () =>
  createSelector(selectState, (state) => state.count);
