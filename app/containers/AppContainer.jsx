import React, { Component } from 'react';
import { connect } from 'react-redux';
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

	ComponentDidMount() {
		// load all urls in tabs?
	}

	render() {
		const props = this.props.chatSessions;
		return (
			<div>
				<Layout>
					<Panel>
						<Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} hideMode="display" fixed>
							<Tab label="X" style={{maxWidth: '50px'}} onClick={this.toggleDrawerActive}>
								Home Page
							</Tab>
							{
								props.activeAccounts.map(account => {
									return (
										<Tab key={props.activeAccounts.indexOf(account)} label={account} id="tab" style={{maxWidth: '200px'}}>
											<Webview />
										</Tab>
									)
								})
							}
		        </Tabs>

					</Panel>

					 {/* SIDEBAR */}
					<NavDrawer
						pinned={this.state.drawerActive}
						onOverlayClick={this.toggleDrawerActive}
						>
						<Sidebar />
					</NavDrawer>

				</Layout>
      </div>
    )
  }
}

const mapStateToProps = ({ chatSessions }) => ({ chatSessions });

export default connect(mapStateToProps)(AppContainer);
