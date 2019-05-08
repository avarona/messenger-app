import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux";

import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";

// allows use of Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })),
    autoRehydrate()
  )
);

persistStore(store);

export default store;
