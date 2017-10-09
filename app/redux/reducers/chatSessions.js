const ipcRenderer = window.require('electron').ipcRenderer;

/* -----------------    ACTIONS     ------------------ */

const GET_ACCOUNTS = 'GET_ACCOUNTS';
const ADD_SESSION = 'ADD_SESSION';
const ADD_ACCOUNT = 'ADD_ACCOUNT';

/* ------------   ACTION CREATORS     ----------------- */

export const getAccounts = () => ({
  type: GET_ACCOUNTS
});

export const addSession = (account) => ({
  type: ADD_SESSION,
  account
});

export const addAccount = (account) => ({
  type: ADD_ACCOUNT,
  account
})

/* -------------      API CALLS    ------------------- */

// Add all accounts to state
export const getAccountsAPI = () =>
  (dispatch) => {
    dispatch(getAccounts());
}

/* -------------       REDUCER     ------------------- */

const initialState = {
  activeAccounts: [],
  sidebarAccounts: [],
  fixedAccounts: [
    'Google',
    'Facebook',
    'WeChat',
    'Skype'
  ]
}

const chatSessions = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ACCOUNTS:

      return newState;
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
