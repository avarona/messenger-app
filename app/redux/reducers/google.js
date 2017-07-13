const ipcRenderer = window.require('electron').ipcRenderer

/* -----------------    ACTIONS     ------------------ */

const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN';

/* ------------   ACTION CREATORS     ----------------- */

export const googleSignIn = () => ({
  type: GOOGLE_SIGN_IN
});

/* -------------      API CALLS    ------------------- */

export const googleAPI = () =>
  dispatch => {
    ipcRenderer.send('google-oauth', 'getToken')
    ipcRenderer.on('google-oauth-reply', (event, {access_token}) => {
      dispatch(googleSignIn())
    })
}

/* -------------       REDUCER     ------------------- */

const google = (state = '', action) => {
  switch (action.type){
    case GOOGLE_SIGN_IN:
      return 'Updated state';
    default:
      return state;
    }
};

export default google;
