import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, NavDrawer, Panel } from 'react-toolbox';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link } from 'react-toolbox/lib/link';
import { Button } from 'react-toolbox/lib/button';
import { Dialog } from 'react-toolbox/lib/dialog';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';

import { Google, Github } from '../components/Icons.jsx';

class AppContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			drawerActive: true,
      drawerPinned: false,
			dialogActive: false
		}
		this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
		this.toggleDrawerPinned = this.toggleDrawerPinned.bind(this);
		this.addAccount = this.addAccount.bind(this);
		this.toggleDiaglogActive = this.toggleDiaglogActive.bind(this);
	}

	toggleDrawerActive() {
    this.setState({drawerActive: !this.state.drawerActive});
  }

  toggleDrawerPinned() {
    this.setState({drawerPinned: !this.state.drawerPinned});
  }

	addAccount() {
		this.setState({addAccount: !this.state.addAccount});
	}

	toggleDiaglogActive() {
		this.setState({dialogActive: !this.state.dialogActive})
	}

	render() {
		return (
			<div>
				<Layout>
					<Panel>
						<AppBar title="Messenger App" leftIcon="menu" onLeftIconClick={this.toggleDrawerPinned}>
							<Navigation>
							<Link href="#" label="Sign In" icon="input" />
						</Navigation>
						</AppBar>
					</Panel>
					<NavDrawer active={this.state.drawerActive} pinned={this.state.drawerPinned} onOverlayClick={this.toggleDrawerActive}>
						<List selectable ripple>
					    <ListSubHeader caption="Explore accounts" />
					    <ListItem
					      avatar={<Avatar style={{backgroundColor: 'white'}} icon={<Google />} />}
					      caption="Google"
					      legend="Messages: 3"
					      rightIcon="star"
					    />
							<ListDivider />
							<ListItem
					      avatar={<Avatar style={{backgroundColor: 'black'}} icon={<Github />} />}
					      caption="Facebook"
					      legend="Messages: 6"
					      rightIcon="star"
					    />
							<div className="center">
								<Button label="+ Add Account" onClick={this.toggleDiaglogActive} flat primary />
								<Dialog
									// actions={this.actions}
									active={this.state.dialogActive}
									onEscKeyDown={this.toggleDiaglogActive}
									onOverlayClick={this.toggleDiaglogActive}
									title="My awesome dialog">
									Some dialog here
								</Dialog>
							</div>
						</List>
					</NavDrawer>
				</Layout>
      </div>
    )
  }
}

/* REDUX CONTAINER */

export default connect()(AppContainer);
