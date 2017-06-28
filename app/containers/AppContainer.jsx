import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, NavDrawer, Panel } from 'react-toolbox';
import { Button } from 'react-toolbox/lib/button';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';

import { Google, Github } from '../components/Icons.jsx';

class AppContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			drawerActive: false,
      drawerPinned: false
		}
		this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
		this.toggleDrawerPinned = this.toggleDrawerPinned.bind(this);
	}

	toggleDrawerActive() {
    this.setState({ drawerActive: !this.state.drawerActive });
  }

  toggleDrawerPinned() {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  }

	render() {
		return (
			<div>
				<Layout>
					<Panel>
						<Button onClick={this.toggleDrawerPinned} label="Nav" raised primary />
					</Panel>
					<NavDrawer active={this.state.drawerActive} pinned={this.state.drawerPinned} onOverlayClick={this.toggleDrawerActive}>
						<List selectable ripple>
					    <ListSubHeader caption="Explore accounts" />
					    <ListItem
					      avatar={<Avatar style={{backgroundColor: 'white'}} icon={<Google />} />}
					      caption="Dr. Manhattan"
					      legend="Jonathan 'Jon' Osterman"
					      rightIcon="star"
					    />
							<ListDivider />
							<ListItem
					      avatar={<Avatar style={{backgroundColor: 'black'}} icon={<Github />} />}
					      caption="Dr. Manhattan"
					      legend="Jonathan 'Jon' Osterman"
					      rightIcon="star"
					    />
							<Button label="+ Add Account" flat primary />
						</List>
					</NavDrawer>
				</Layout>
      </div>
    )
  }
}

/* REDUX CONTAINER */

export default connect()(AppContainer);
