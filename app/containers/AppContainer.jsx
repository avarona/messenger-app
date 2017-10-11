import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, NavDrawer, Panel, Tabs, Tab } from 'react-toolbox';

import Webview from '../components/Webview.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { drawer } from '../redux/reducers/navigation.js';
import { activateChat, getAccountsAPI } from '../redux/reducers/chatSessions.js';

class AppContainer extends Component {
	constructor(props){
		super(props)
		this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
		this.handleFixedTabChange = this.handleFixedTabChange.bind(this);
	}

	handleFixedTabChange(index) {
		console.log(index)
		if (index !== 0) this.props.activateChat(index)
  }

	toggleDrawerActive() {
		this.props.toggleDrawer();
  }

	componentWillMount() {
		// load all urls in tabs?
		this.props.getAccounts()
	}

	render() {
		const chats = this.props.chatSessions;
		const navigation = this.props.navigation;
		return (
			<div>
				<Layout>
					<Panel>
						<Tabs index={chats.activeTab} onChange={this.handleFixedTabChange} hideMode="display" fixed>
							<Tab icon="settings" style={{maxWidth: '50px'}} onClick={this.toggleDrawerActive}>
								No content
							</Tab>
							<Tab label="hi" hidden>
								Main page component
							</Tab>
							{
								chats.sidebarAccounts.map(account => {
									let website = '';
									chats.fixedAccounts.map(obj => {
										if (Object.keys(obj)[0] === account) {
											website = obj[account].website;
										}
									})
									return (
										<Tab key={chats.sidebarAccounts.indexOf(account)} label={account} id="tab" style={{maxWidth: '200px'}}>
											<Webview website={website} />
										</Tab>
									)
								})
							}
		        </Tabs>

					</Panel>

					 {/* SIDEBAR */}
					<NavDrawer
						active={navigation.drawer}
						onOverlayClick={this.toggleDrawerActive}>
						<Sidebar />
					</NavDrawer>

				</Layout>
      </div>
    )
  }
}

const mapStateToProps = ({ chatSessions, navigation }) => ({ chatSessions, navigation });

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(drawer()),
	activateChat: (index) => dispatch(activateChat(index)),
	getAccounts: () => dispatch(getAccountsAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
