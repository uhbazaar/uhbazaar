import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { /* marginBottom: '10px', */ backgroundColor: '#17252a' };
    return (
        <Menu stackable style={menuStyle} attached="top" borderless inverted>

          <Menu.Item>
            <Image size='mini' src='images/uh-bazaar-logo.png' circular/>
          </Menu.Item>

          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header inverted as='h1'>UH Bazaar</Header>
          </Menu.Item>

          {this.props.currentUser ? (
              [<Menu.Item as={NavLink} activeClassName="active" exact to="/userprofile" key='add'>
                My Profile
              </Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/categoriespage" key='category'>
                  Categories
                </Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/createitem" key='list'>
                Sell Something
              </Menu.Item>]
          ) : ''}

          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
          ) : ''}

          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown text="Login" pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
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
