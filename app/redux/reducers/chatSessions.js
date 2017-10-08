const ipcRenderer = window.require('electron').ipcRenderer;

/* -----------------    ACTIONS     ------------------ */

const ADD_SESSION = 'ADD_SESSION';
const ADD_ACCOUNT = 'ADD_ACCOUNT';

/* ------------   ACTION CREATORS     ----------------- */

export const addSession = (account) => ({
  type: ADD_SESSION,
  account
});

export const addAccount = (account) => ({
  type: ADD_ACCOUNT,
  account
})

/* -------------      API CALLS    ------------------- */

// add a tab if it doesnt already exist
export const addSessionAPI = (account) =>
  (dispatch) => {
    dispatch(addSession(account));
}

// add account and sign in (subscribe)
export const addAccountAPI = (account) => {
  dispatch => {
    dispatch(addAccount(account));
  }
}

/* -------------       REDUCER     ------------------- */

const initialState = {
  activeAccounts: [],
  sidebarAccounts: []
}

const chatSessions = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_SESSION:
      newState.activeAccounts.push(action.account);
      return newState;
    case ADD_ACCOUNT:
      newState.sidebarAccounts.push(action.account);
      return newState;
    default:
      return state;
    }
};

export default chatSessions;
