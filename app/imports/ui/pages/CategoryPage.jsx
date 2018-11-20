import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Checkbox, Menu, Search, Icon, Sidebar } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import CategoryMenu from '../components/CategoryMenu';
import { Categories } from '../../api/category/category';
import CategoriesMenu from '../components/CategoriesMenu';
import { Card } from 'semantic-ui-react/dist/commonjs/views/Card/Card';

/** A simple static component to render some text for the landing page. */
class CategoryPage extends React.Component {
  state = { visible: true };

  render() {
    const { visible } = this.state;
    const titleStyle = {
      fontSize: '32px',
      fontFamily: 'Cinzel',
    };
    const mainContainerStyle = {
      paddingTop: '20px',
      paddingBottom: '20px',
      marginBottom: '24vh',
    };
    const catSideMenu = {
      fontWeight: 'bold',
    };
    return (

        <div>
          <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                vertical
                visible={visible}
                width='wide'>
              <Menu.Item>
                <Menu.Header style={titleStyle}>
                  <Icon size='big' name={this.props.match.params.icon}/> {`${this.props.match.params.name}`}
                </Menu.Header>
              </Menu.Item>
              <Menu.Item as='a'>
                <Search />
              </Menu.Item>
              <Menu.Item as='a'>
                <Checkbox label='Name' />
              </Menu.Item>
              <Menu.Item as='a'>
                <Checkbox label='Date' />
              </Menu.Item>
              <Menu.Item as='a'>
                <Checkbox label='Price' />
              </Menu.Item>
              <Menu.Item style={catSideMenu }>
                {this.props.categories.map((category) => <CategoriesMenu key={category._id} category={category}/>)}
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher >
              <Container style={mainContainerStyle}>
              <style>{'body {background-color: #def2f1;, color: }'}</style>
                  <CategoryMenu/>
              </Container>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.object,
  categories: PropTypes.array.isRequired,

};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Categories');
  return {
    categories: Categories.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CategoryPage);
