import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, NavDrawer, Panel } from 'react-toolbox';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link } from 'react-toolbox/lib/Link';
import { Button } from 'react-toolbox/lib/button';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';

import { Google, Github } from '../components/Icons.jsx';

class AppContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			drawerActive: false,
      drawerPinned: false,
			addAccount: false
		}
		this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
		this.toggleDrawerPinned = this.toggleDrawerPinned.bind(this);
		this.addAccount = this.addAccount.bind(this);
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
								<Button label="+ Add Account" onClick={this.addAccount} flat primary />
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
