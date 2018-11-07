import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default class CategoryTopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className='category-topmenu'>
        <Container>
          <Menu.Item>
            UH BAZaAR
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
