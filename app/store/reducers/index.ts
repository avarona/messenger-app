import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import googleAuth from 'reducers/google';
import facebookAuth from 'reducers/facebook';
import chatSessions from 'reducers/chatSessions';
import navigation from 'reducers/navigation';

export const rootReducer = combineReducers({
  googleAuth,
  facebookAuth,
  chatSessions,
  navigation,
});
