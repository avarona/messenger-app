import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-toolbox/lib/button';
import { Dialog } from 'react-toolbox/lib/dialog';
import { addSession, activateChat } from 'reducers/chatSessions';
import { dialog } from 'reducers/navigation';

class SocialDialog extends Component {
  constructor(props) {
    super(props);
    this.toggleDialogActive = this.toggleDialogActive.bind(this);
    this.addChat = this.addChat.bind(this);
  }

  toggleDialogActive() {
    const { toggleDialog } = this.props;
    toggleDialog();
  }

  addChat(account) {
    const chats = this.props.chatSessions.sidebarAccounts;
    if (chats.indexOf(account) < 0) {
      this.props.addSession(account);
      this.props.activateChat(chats.indexOf(account) + 2);
    }
    this.props.toggleDialog();
  }

  render() {
    const { navigation, chatSessions } = this.props;

    return (
      <div className="center">
        <Button label="+ Add Account" onClick={this.toggleDialogActive} flat primary />
        <Dialog
          active={navigation.dialog}
          onEscKeyDown={this.toggleDialogActive}
          onOverlayClick={this.toggleDialogActive}
          title="List of available accounts"
        >
          {chatSessions.fixedAccounts.map((obj) => {
            const account = Object.keys(obj)[0];
            return (
              <Button
                key={chatSessions.fixedAccounts.indexOf(obj)}
                label={account}
                onClick={() => this.addChat(account)}
              />
            );
          })}
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ chatSessions, navigation }) => ({
  chatSessions,
  navigation,
});

const mapDispatchToProps = dispatch => ({
  addSession: account => dispatch(addSession(account)),
  activateChat: index => dispatch(activateChat(index)),
  toggleDialog: () => dispatch(dialog()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SocialDialog);
