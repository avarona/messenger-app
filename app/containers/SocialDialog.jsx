import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-toolbox/lib/button';
import { Dialog } from 'react-toolbox/lib/dialog';
import { addAccount } from '../redux/reducers/chatSessions.js';

class SocialDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogActive: false
    }
    this.toggleDialogActive = this.toggleDialogActive.bind(this);
    this.addAccount = this.addAccount.bind(this);
  }

  toggleDialogActive() {
		this.setState({dialogActive: !this.state.dialogActive});
	}

  addAccount(account) {
    const sidebar = this.props.chatSessions.sidebarAccounts;
    if (sidebar.indexOf(account) < 0) this.props.addAccount(account)
    this.setState({dialogActive: !this.state.dialogActive});
  }

  render() {
    const props = this.props.chatSessions;
    return (
      <div className="center">
        <Button label="+ Add Account" onClick={this.toggleDialogActive} flat primary />
        <Dialog
          active={this.state.dialogActive}
          onEscKeyDown={this.toggleDialogActive}
          onOverlayClick={this.toggleDialogActive}
          title="List of available accounts">
          {
            props.fixedAccounts.map(account => {
              return (
                <Button key={props.fixedAccounts.indexOf(account)} label={account} onClick={() => {this.addAccount(account)}} />
              )
            })
          }
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = ({ chatSessions }) => ({ chatSessions });

const mapDispatchToProps = dispatch => ({
  addAccount: (account) => dispatch(addAccount(account))
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialDialog);
