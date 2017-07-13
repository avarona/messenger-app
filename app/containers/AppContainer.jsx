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
import { googleAPI } from '../redux/reducers/google.js';
import { facebookAPI } from '../redux/reducers/facebook.js';

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
		this.toggleDiaglogActive = this.toggleDiaglogActive.bind(this);

		this.googleLogin = this.googleLogin.bind(this);
		this.facebookLogin = this.facebookLogin.bind(this);
	}

	toggleDrawerActive() {
    this.setState({drawerActive: !this.state.drawerActive});
  }

  toggleDrawerPinned() {
    this.setState({drawerPinned: !this.state.drawerPinned});
  }

	toggleDiaglogActive() {
		this.setState({dialogActive: !this.state.dialogActive})
	}

	googleLogin() {
		this.props.google()
	}
	facebookLogin() {
		this.props.facebook()
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

						{/* LOAD URL */}
						<webview style={{display: 'inline-flex', width: '100%', height: '100vh'}} src="https://hangouts.google.com" />

					</Panel>
					<NavDrawer active={this.state.drawerActive} pinned={this.state.drawerPinned} onOverlayClick={this.toggleDrawerActive}>

						<List selectable ripple>
					    <ListSubHeader caption="Explore accounts" />
					    <ListItem
					      avatar={<Avatar style={{backgroundColor: 'white'}} icon={<Google />} />}
					      caption="Google"
					      legend="Messages: 3"
					      rightIcon="star"
								onClick={this.hangouts}
					    />
							<ListDivider />
							<ListItem
					      avatar={<Avatar style={{backgroundColor: 'black'}} icon={<Github />} />}
					      caption="Facebook"
					      legend="Messages: 6"
					      rightIcon="star"
					    />
						</List>

						<div className="center">
							<Button label="+ Add Account" onClick={this.toggleDiaglogActive} flat primary />
							<Dialog
								// actions={this.actions}
								active={this.state.dialogActive}
								onEscKeyDown={this.toggleDiaglogActive}
								onOverlayClick={this.toggleDiaglogActive}
								title="My awesome dialog">
								<Button label="GOOGLE" onClick={this.googleLogin} />
								<Button label="FACEBOOK" onClick={this.facebookLogin} />
							</Dialog>
						</div>
					</NavDrawer>
				</Layout>
      </div>
    )
  }
}

/* REDUX CONTAINER */

const mapStateToProps = ({ googleAuth, facebookAuth }) => ({ googleAuth, facebookAuth })

const mapDispatchToProps = dispatch => ({
	google: () => dispatch(googleAPI()),
	facebook: () => dispatch(facebookAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
