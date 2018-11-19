import React from 'react';
import { Container, Checkbox, Menu, Search, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CategoryMenu from '../components/CategoryMenu';

/** A simple static component to render some text for the landing page. */
class CategoryPage extends React.Component {
  render() {
    const titleStyle = {
      paddingTop: '3.5vh',
      paddingBottom: '3vh',
      paddingLeft: '3vh',
      fontSize: '46px',
      fontFamily: 'EB Garamond',
    };
    const mainContainerStyle = {
      paddingTop: '20px',
      marginLeft: '10vh',
      paddingBottom: '20px',
      marginBottom: '24vh',
    };
    return (
        <div>
            <Menu borderless fluid >
              <Container>
              <Menu.Header style={titleStyle}>
                {this.props.match.params.name}
              </Menu.Header>
              <Menu.Item>
                <Search/>
              </Menu.Item>
              <Menu.Item>
                <Checkbox label='Name'/>
              </Menu.Item>
              <Menu.Item>
                <Checkbox label='Location'/>
              </Menu.Item>
              <Menu.Item>
                <Checkbox label='Price'/>
              </Menu.Item>
              <Menu.Item>
                <Button as={NavLink} to='/categoriespage'>
                  Back to Categories
                </Button>
              </Menu.Item>
          </Container>
        </Menu>
          <Container style={mainContainerStyle}>
            <style>{'body {background-color: #def2f1;, color: }'}</style>
            <CategoryMenu/>
          </Container>
        </div>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.object,
};

export default CategoryPage;
