import { createStore, applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from './redux';

// allows use of Redux devtools
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })),
    autoRehydrate(),
  ),
);

persistStore(store);

export default store;
