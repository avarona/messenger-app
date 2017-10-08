import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';

import SocialDialog from '../containers/SocialDialog.jsx';
import { Google } from '../components/icons.jsx';
import { addSession } from '../redux/reducers/chatSessions.js';

const Sidebar = (props) => {
  const sidebar = props.chatSessions;
  return (
    <List selectable ripple>
      <ListSubHeader caption="Explore accounts" />
      {
        sidebar.sidebarAccounts.map(account => {
          return (
            <ListItem
              key={sidebar.sidebarAccounts.indexOf(account)}
              avatar={
                <Avatar
                  style={{backgroundColor: 'white'}}
                  icon={
                    <Google />
                  }
                />
              }
              caption={account}  // change to name
              legend="Messages: 3"  // placeholder for future
              rightIcon="star"
              onClick={() => {
                const activeTabs = sidebar.activeAccounts;
                if (activeTabs.indexOf(account) < 0) props.addChat(account)
              }}
            />
          )
        })
      }
      <ListDivider />
      <SocialDialog />
    </List>
  )
}

const mapStateToProps = ({ chatSessions }) => ({ chatSessions });

const mapDispatchToProps = dispatch => ({
  addChat: (account) => dispatch(addSession(account))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
