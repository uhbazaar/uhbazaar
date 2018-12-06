import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const menuStyle = {
      paddingLeft: '500px',
      paddingBottom: '0px',
      backgroundColor: '#2b7a78',
    };
    return (
          <Menu attached='top' fluid inverted borderless style={menuStyle}>
            <Menu.Item>
              CLASSIFIED ADS AND COMMUNITY NOTICES FOR THE UHM OHANA </Menu.Item>
          </Menu>
    );
  }
}
