import React from 'react';
const webview = window.require('electron')

const styles = {
  webview: {
    // display: 'inline-flex',
    margin: '0px',
    padding: '0px',
    width: '100%',
    height: '100vh',
  }
}

const Webview = () => {
  return (
    <webview style={styles.webview} src="https://web.wechat.com" />
  )
}

export default Webview;
