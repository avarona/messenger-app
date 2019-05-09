import React from 'react';
import { connect } from 'react-redux';
import { IconButton } from 'react-toolbox/lib';

import { removeSession } from 'reducers/chatSessions';

const RemoveButton = props => (
  <IconButton icon="cancel" accent onClick={() => props.removeChat(props.remove)} />
);

const mapStateToProps = ({ chatSessions }) => ({ chatSessions });

const mapDispatchToProps = dispatch => ({
  removeChat: account => dispatch(removeSession(account)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemoveButton);
