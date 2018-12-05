import React from 'react';
import { Container, Menu, Dropdown, Icon, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (

        <Container>
          <Menu fixed className='ui topmenu fixed menu'>
            <Menu.Item as={'a'} className="right item">
              Join/Log In To NikePlus Account
            </Menu.Item>


            <Menu.Item><Icon name="cart" /></Menu.Item>
            <Menu.Item>
              <Image className="ui flag image"
                     src="https://content.nike.com/content/dam/nike/global/country_flags/us_sml.png"/>
            </Menu.Item>
          </Menu>
        </Container>

    );
  }
}
