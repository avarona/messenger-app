import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-toolbox/lib/button';
import { Dialog } from 'react-toolbox/lib/dialog';
import { addSession, activateChat } from '../redux/reducers/chatSessions.js';
import { dialog } from '../redux/reducers/navigation.js';

class SocialDialog extends Component {
  constructor(props) {
    super(props)
    this.toggleDialogActive = this.toggleDialogActive.bind(this);
    this.addChat = this.addChat.bind(this);
  }

  toggleDialogActive() {
    this.props.toggleDialog();
	}

  addChat(account) {
    const chats = this.props.chatSessions.sidebarAccounts;
    if (chats.indexOf(account) < 0) {
      this.props.addSession(account);
      this.props.activateChat(chats.indexOf(account) + 1);
    }
    this.props.toggleDialog();
  }

  render() {
    const nav = this.props.navigation;
    const chats = this.props.chatSessions;
    return (
      <div className="center">
        <Button label="+ Add Account" onClick={this.toggleDialogActive} flat primary />
        <Dialog
          active={nav.dialog}
          onEscKeyDown={this.toggleDialogActive}
          onOverlayClick={this.toggleDialogActive}
          title="List of available accounts">
          {
            chats.fixedAccounts.map(obj => {
              const account = Object.keys(obj).toString();
              return (
                <Button
                  key={chats.fixedAccounts.indexOf(obj)}
                  label={account}
                  onClick={() => this.addChat(account)} />
              )
            })
          }
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = ({ chatSessions, navigation }) => ({ chatSessions, navigation });

const mapDispatchToProps = dispatch => ({
  addSession: (account) => dispatch(addSession(account)),
  activateChat: (index) => dispatch(activateChat(index)),
  toggleDialog: () => dispatch(dialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialDialog);
