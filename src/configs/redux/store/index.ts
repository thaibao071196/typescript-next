import { configureStore, compose } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { createWrapper } from 'next-redux-wrapper';

const rootStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const runSaga = sagaMiddleware.run;

  const middleware = [sagaMiddleware];

  const injectEnhancer = createInjectorsEnhancer({
    runSaga,
    createReducer: rootReducer,
  });

  const store = configureStore({
    reducer: rootReducer(),
    middleware,
    enhancers: [injectEnhancer],
  });

  return store;
};

export const storeWrapper = createWrapper(rootStore);

export type AppStore = ReturnType<typeof rootStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
