import React, { Component } from 'react';

import { Layout, NavDrawer, Panel, Tabs, Tab } from 'react-toolbox';

import Webview from '../components/Webview.jsx';
import Sidebar from '../components/Sidebar.jsx';

class AppContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			drawerActive: false,
			fixedIndex: 0
		}
		this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
		this.handleFixedTabChange = this.handleFixedTabChange.bind(this);
	}

	handleFixedTabChange(index) {
    this.setState({fixedIndex: index});
  }

	toggleDrawerActive() {
    this.setState({drawerActive: !this.state.drawerActive});
  }

	render() {
		return (
			<div>
				<Layout>
					<Panel>
						<Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
							<Tab label="X" style={{maxWidth: '50px'}} onClick={this.toggleDrawerActive}>
								Home
							</Tab>
		          <Tab label="First" style={{maxWidth: '200px'}}>
								<Webview />
							</Tab>
		          <Tab label="Second" style={{maxWidth: '200px'}}><small>Second Content</small></Tab>
		          <Tab label="Third" style={{maxWidth: '200px'}}><small>Third Content</small></Tab>
		        </Tabs>

					</Panel>

					{/* SIDEBAR */}
					<NavDrawer
						active={this.state.drawerActive}
						onOverlayClick={this.toggleDrawerActive}
						>
						<Sidebar />
					</NavDrawer>

				</Layout>
      </div>
    )
  }
}

export default AppContainer;
