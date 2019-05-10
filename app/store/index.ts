import { createStore, applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from 'reducers';

// allows use of Redux devtools
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))),
);

export default store;
