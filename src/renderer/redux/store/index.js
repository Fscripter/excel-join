/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';

import Homereducer from 'renderer/components/home/reducer';

const reducers = combineReducers({ Homereducer });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
