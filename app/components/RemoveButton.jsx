import React from 'react';
import { connect } from 'react-redux';
import { IconButton } from 'react-toolbox';

import { removeSession } from '../redux/reducers/chatSessions.js';

const RemoveButton = (props) => {
  return (
    <IconButton icon="cancel" accent onClick={() => props.removeChat(props.remove)} />
  )
}

const mapStateToProps = ({ chatSessions }) => ({ chatSessions });

const mapDispatchToProps = dispatch => ({
  removeChat: (account) => dispatch(removeSession(account))
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);
