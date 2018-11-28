import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import SearchBar from './SearchBar';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { backgroundColor: '#17252a', fontFamily: 'PT Sans Caption' };
    const imageStyle = { height: '64px' };
    const dropdownStyle = { marginRight: '32px' };
    return (
        <Menu stackable style={menuStyle} attached="top" borderless inverted>

          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Image style={imageStyle} src='images/navbar-logo.png'/>
          </Menu.Item>

          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
          ) : ''}

          {this.props.currentUser !== '' ? (
              [
                <Menu.Item as={NavLink} className="" exact to="/categoriespage" key='cat'>Categories</Menu.Item>,
                <Menu.Item as={NavLink} className="" exact to="/showusers" key='show'>Show Users</Menu.Item>,
              ]
          ) : ''}

          <Menu.Item fitted position="right">
            {this.props.currentUser !== '' ? (
                <Menu.Item position='right'><SearchBar/></Menu.Item>
            ) : ''}
          </Menu.Item>
          <Menu.Item>
            {this.props.currentUser !== '' ? (
                <Dropdown style={dropdownStyle} pointing="top right" icon={'large bars'}>
                  <Dropdown.Menu>
                    <Dropdown.Item text="My Account" as={NavLink} className="" exact to="/userprofile" key='add'/>
                    <Dropdown.Item text="Add New Item" as={NavLink} className="" exact to="/createitem" key='list'/>
                    <Dropdown.Item icon="sign-out alternate" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : ''}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
