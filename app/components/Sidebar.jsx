import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';

import SocialDialog from '../containers/SocialDialog.jsx';
import { Google } from '../components/icons.jsx';
import RemoveButton from './RemoveButton.jsx';
import { activateChat } from '../redux/reducers/chatSessions.js';

const Sidebar = (props) => {
  const sidebar = props.chatSessions.sidebarAccounts;
  return (
    <List selectable ripple>
      <ListSubHeader caption="Explore accounts" />
      {
        sidebar.map(account => {
          return (
            <ListItem
              key={sidebar.indexOf(account)}
              caption={account}
              legend="Messages: 3"  // placeholder for future
              rightIcon={(<RemoveButton remove={account} />)}
              onClick={() => {
                console.log(sidebar.indexOf(account))
                props.activateChat(sidebar.indexOf(account) + 1);
              }}
              avatar={
                <Avatar
                  style={{backgroundColor: 'white'}}
                  icon={
                    <Google />
                  }
                />
              }
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
  activateChat: (index) => dispatch(activateChat(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
