import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import googleAuth from './reducers/google';
import facebookAuth from './reducers/facebook';

const store = combineReducers({
  googleAuth,
  facebookAuth
});

export default store;
