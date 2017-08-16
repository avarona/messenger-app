import React, { Component } from 'react';

import { Button } from 'react-toolbox/lib/button';
import { Dialog } from 'react-toolbox/lib/dialog';

class SocialDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogActive: false
    }
    this.toggleDialogActive = this.toggleDialogActive.bind(this);
  }

  toggleDialogActive() {
		this.setState({dialogActive: !this.state.dialogActive})
	}

  render() {
    return (
      <div className="center">
        <Button label="+ Add Account" onClick={this.toggleDialogActive} flat primary />
        <Dialog
          active={this.state.dialogActive}
          onEscKeyDown={this.toggleDialogActive}
          onOverlayClick={this.toggleDialogActive}
          title="My awesome dialog">
          <Button label="GOOGLE" onClick={this.googleLogin} />
          <Button label="FACEBOOK" onClick={this.facebookLogin} />
        </Dialog>
      </div>
    )
  }
}

export default SocialDialog;
