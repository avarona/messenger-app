import React from 'react';

const styles = {
  webview: {
    display: 'inline-flex',
    width: '100%',
    height: '100vh',
  }
}

const Webview = (props) => {
  return (
    <webview style={styles.webview} src="https://hangouts.google.com" />
  )
}

export default Webview;
