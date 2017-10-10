const ipcRenderer = window.require('electron').ipcRenderer;

/* -----------------    ACTIONS     ------------------ */

const GET_ACCOUNTS = 'GET_ACCOUNTS';
const ADD_SESSION = 'ADD_SESSION';
const REMOVE_SESSION = 'REMOVE_SESSION';
const ACTIVE_TAB = 'ACTIVE_TAB';

/* ------------   ACTION CREATORS     ----------------- */

export const getAccounts = () => ({
  type: GET_ACCOUNTS
});

export const addSession = (account) => ({
  type: ADD_SESSION,
  account
});

export const removeSession = (account) => ({
  type: REMOVE_SESSION,
  account
})

export const activateChat = (index) => ({
  type: ACTIVE_TAB,
  index
})

/* -------------      API CALLS    ------------------- */

/* -------------       REDUCER     ------------------- */

const initialState = {
  activeTab: null,
  sidebarAccounts: [],
  fixedAccounts: [
    {
      Google: {
        icon: null,
        website: 'https://hangouts.google.com/'
      }
    }, {
      Facebook: {
        icon: null,
        website: 'https://www.messenger.com/'
      }
    }, {
      WeChat: {
        icon: null,
        website: 'https://web.wechat.com/'
      }
    }, {
      Skype: {
        icon: null,
        website: 'https://skype.com/'
      }
    }
  ]
}

const chatSessions = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ACCOUNTS:
      return newState.fixedAccounts.push({
        [action.name]: {
          icon: action.icon,
          website: action.website
        }
      });
    case ADD_SESSION:
      newState.sidebarAccounts.push(action.account);
      return newState;
    case REMOVE_SESSION:
      newState.sidebarAccounts = newState.sidebarAccounts.filter(account => {
        if (account !== action.account) return account;
      })
      return newState;
    case ACTIVE_TAB:
      newState.activeTab = action.index;
      return newState;
    default:
      return state;
    }
};

export default chatSessions;
