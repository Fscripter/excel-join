import { createStore, combineReducers } from 'redux';

import loadReducer from './load/reducer/reducer';
import stepReducer from './steps/reducer';
import uploadReducer from './upload/reducer';
import selectionReducer from './selection/reducer';
import searchReducer from './search/reducer';

const reducers = combineReducers({
  loadReducer,
  stepReducer,
  uploadReducer,
  selectionReducer,
  searchReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
