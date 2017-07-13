const ipcRenderer = window.require('electron').ipcRenderer

/* -----------------    ACTIONS     ------------------ */

const FACEBOOK_SIGN_IN = 'FACEBOOK_SIGN_IN';

/* ------------   ACTION CREATORS     ----------------- */

export const facebookSignIn = () => ({
  type: FACEBOOK_SIGN_IN
});

/* -------------      API CALLS    ------------------- */

export const facebookAPI = () =>
  dispatch => {
    ipcRenderer.send('facebook-oauth', 'getToken')
    ipcRenderer.on('facebook-oauth-reply', (event, {access_token}) => {
    })
    dispatch(facebookSignIn())
}

/* -------------       REDUCER     ------------------- */

const facebook = (state = '', action) => {
  switch (action.type){
    case FACEBOOK_SIGN_IN:
      return 'Signed in';
    default:
      return state;
    }
};

export default facebook;
