import { ipcRenderer } from 'electron';

/* -----------------    ACTIONS     ------------------ */

const GET_ACCOUNTS = 'GET_ACCOUNTS';
const ADD_SESSION = 'ADD_SESSION';
const REMOVE_SESSION = 'REMOVE_SESSION';
const ACTIVE_TAB = 'ACTIVE_TAB';

/* ------------   ACTION CREATORS     ----------------- */

export const getAccounts = accounts => ({
  type: GET_ACCOUNTS,
  accounts,
});

export const addSession = account => ({
  type: ADD_SESSION,
  account,
});

export const removeSession = account => ({
  type: REMOVE_SESSION,
  account,
});

export const activateChat = index => ({
  type: ACTIVE_TAB,
  index,
});

/* -------------      API CALLS    ------------------- */

export const getAccountsAPI = () => (dispatch) => {
  ipcRenderer.send('get-accounts', 'getAccount');
  ipcRenderer.on('get-accounts-reply', (event, accounts) => {
    dispatch(getAccounts(accounts));
  });
};

/* -------------       REDUCER     ------------------- */

const initialState = {
  activeTab: 1,
  sidebarAccounts: [],
  fixedAccounts: [],
};

const chatSessions = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ACCOUNTS:
      action.accounts.forEach((account) => {
        newState.fixedAccounts.push({
          [account.name]: {
            icon: account.icon,
            website: account.website,
          },
        });
      });
      return newState;
    case ADD_SESSION:
      newState.sidebarAccounts.push(action.account);
      return newState;
    case REMOVE_SESSION:
      newState.sidebarAccounts = newState.sidebarAccounts.filter(
        account => account !== action.account,
      );
      return newState;
    case ACTIVE_TAB:
      newState.activeTab = action.index;
      return newState;
    default:
      return state;
  }
};

export default chatSessions;
