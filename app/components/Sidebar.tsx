import React from 'react';
import { connect } from 'react-redux';

import {
  List, ListItem, ListSubHeader, ListDivider,
} from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';

import SocialDialog from 'containers/SocialDialog';
import RemoveButton from 'components/RemoveButton';
import { activateChat } from 'reducers/chatSessions';

const Sidebar = (props) => {
  const sidebar = props.chatSessions.sidebarAccounts;
  const accounts = props.chatSessions.fixedAccounts;
  let index = 0;
  return (
    <List selectable ripple>
      <h1 className="center">Accounts</h1>
      {sidebar.length ? (
        sidebar.map(account => (
          <ListItem
            key={sidebar.indexOf(account)}
            caption={account}
            legend="Messages: 3" // placeholder for future
            rightIcon={<RemoveButton remove={account} />}
            onClick={() => {
              props.activateChat(sidebar.indexOf(account) + 2);
            }}
            avatar={(
              <Avatar
                style={{ backgroundColor: 'white' }}
                image={
                  accounts.map((obj) => {
                    if (Object.keys(obj)[0] === account) {
                      index = accounts.indexOf(obj);
                      return <img key={accounts.indexOf(account)} src={obj[account].icon} />;
                    }
                  })[index]
                }
              />
)}
          />
        ))
      ) : (
        <ListSubHeader caption="No accounts active" />
      )}
      <ListDivider />
      <SocialDialog />
    </List>
  );
};

const mapStateToProps = ({ chatSessions }) => ({ chatSessions });

const mapDispatchToProps = dispatch => ({
  activateChat: index => dispatch(activateChat(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
