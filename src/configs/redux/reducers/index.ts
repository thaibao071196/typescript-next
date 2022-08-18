import { combineReducers } from 'redux';
import { routerReducer } from 'connected-next-router';

const rootReducer = (injectedReducer = {}) =>
  combineReducers({
    router: routerReducer,
    ...injectedReducer,
  });

export default rootReducer;
