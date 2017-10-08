import React from 'react';
const webview = window.require('electron')

const styles = {
  webview: {
    width: '100%',
    height: '100vh',
  }
}

const Webview = (props) => {
  return (
    <webview style={styles.webview} src={props.website} />
  )
}

export default Webview;
