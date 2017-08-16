import React from 'react';

import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';

import SocialDialog from '../containers/SocialDialog.jsx';
import { Google, Github } from '../components/icons.jsx';

const Sidebar = () => {
  return (
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
      <SocialDialog />
    </List>
  )
}

export default Sidebar;
