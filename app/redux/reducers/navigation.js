/* -----------------    ACTIONS     ------------------ */

const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const TOGGLE_DIALOG = 'TOGGLE_DIALOG';

/* ------------   ACTION CREATORS     ----------------- */

export const drawer = () => ({
  type: TOGGLE_DRAWER,
});

export const dialog = () => ({
  type: TOGGLE_DIALOG,
});

/* -------------      API CALLS    ------------------- */

// Add all accounts to state
export const getAccountsAPI = () => (dispatch) => {
  dispatch(getAccounts());
};

/* -------------       REDUCER     ------------------- */

const initialState = {
  drawer: false,
  dialog: false,
};

const navigation = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case TOGGLE_DRAWER:
      newState.drawer = !newState.drawer;
      return newState;
    case TOGGLE_DIALOG:
      newState.dialog = !newState.dialog;
      return newState;
    default:
      return state;
  }
};

export default navigation;
