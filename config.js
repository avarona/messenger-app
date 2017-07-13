const googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenUrl: 'https://www.googleapis.com/oauth2/v4/token',
    useBasicAuthorizationHeader: false,
    redirectUri: 'http://localhost/'
};
const facebookConfig = {
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    authorizationUrl: 'https://www.facebook.com/dialog/oauth',
    // authorizationUrl: 'https://graph.facebook.com/v2.6/me/messages',
    tokenUrl: 'https://graph.facebook.com/oauth/access_token',
    useBasicAuthorizationHeader: false,
    redirectUri: 'https://localhost/'
};
const googleOptions = {
  responseType: 'code',
  scope: 'https://www.googleapis.com/auth/plus.login'
}
const facebookOptions = {
  responseType: 'code'
}

module.exports = {
  googleConfig,
  facebookConfig,
  googleOptions,
  facebookOptions
}
