import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import googleAuth from './reducers/google';
import facebookAuth from './reducers/facebook';
import chatSessions from './reducers/chatSessions';

const store = combineReducers({
  googleAuth,
  facebookAuth,
  chatSessions
});

export default store;
