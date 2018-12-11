import React from 'react';
import { Menu, Responsive } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const menuStyle = {
      paddingBottom: '0px',
      backgroundColor: '#2b7a78',
    };
    return (
      <div>
        <Responsive minWidth={768}>
          <Menu widths={3} attached='top' fluid inverted borderless style={menuStyle}>
            <Menu.Item></Menu.Item>
            <Menu.Item>
              CLASSIFIED ADS AND COMMUNITY NOTICES FOR THE UHM OHANA
            </Menu.Item>
            <Menu.Item></Menu.Item>
          </Menu>
         </Responsive>
      </div>
    );
  }
}
