import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image, Container, Icon, Responsive } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import SearchBar from './SearchBar';
import TopMenu from './TopMenu';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { backgroundColor: '#17252a', fontFamily: 'PT Sans Caption', marginTop: '0px' };
    const imageStyle = { height: '64px' };
    const dropdownStyle = { marginRight: '32px' };
    const topMenu = { marginBottom: '0px' };
    const icon = <Icon size='large' name='bars'></Icon>;
    return (
        <div>
          {this.props.currentUser !== '' ? (
              <Menu stackable style={menuStyle} attached="top" borderless inverted>

                <Menu.Item as={NavLink} activeClassName="" exact to="/">
                  <Image style={imageStyle} src='images/navbar-logo.png'/>
                </Menu.Item>

                {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                    <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
                ) : ''}

                {this.props.currentUser !== '' ? (
                    [
                      <Menu.Item href="https://uhbazaar.github.io/" as={'a'} key='io' position="right">
                        About Us
                      </Menu.Item>,
                      <Menu.Item as={NavLink} className="" exact to="/categoriespage"
                                 key='cat'>Categories</Menu.Item>,
                      <Menu.Item as={NavLink} className="" exact to="/showusers" key='show'>Portfolios</Menu.Item>,
                    ]
                ) : ''}

                <Menu.Item fitted>
                  {this.props.currentUser !== '' ? (
                      <Responsive as={Menu.Item} minWidth={768}> <Menu.Item><SearchBar/></Menu.Item></Responsive>
                  ) : ''}
                </Menu.Item>
                <Menu.Item>
                  {this.props.currentUser !== '' ? (
                      <div>
                        <Responsive maxWidth={768}>
                          <Dropdown style={dropdownStyle} pointing="top left" icon={icon}>
                            <Dropdown.Menu>
                              <Dropdown.Item text="My Account" as={NavLink} className="" exact to="/userprofile"
                                             key='add'/>
                              <Dropdown.Item text="Add New Item" as={NavLink} className="" exact to="/createitem"
                                             key='list'/>
                              <Dropdown.Item icon="sign-out alternate" text="Sign Out" as={NavLink} exact
                                             to="/signout"/>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Responsive>

                        <Responsive minWidth={768}>
                          <Dropdown style={dropdownStyle} pointing="top right" icon={icon}>
                            <Dropdown.Menu>
                              <Dropdown.Item text="My Account" as={NavLink} className="" exact to="/userprofile"
                                             key='add'/>
                              <Dropdown.Item text="Add New Item" as={NavLink} className="" exact to="/createitem"
                                             key='list'/>
                              <Dropdown.Item icon="sign-out alternate" text="Sign Out" as={NavLink} exact
                                             to="/signout"/>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Responsive>
                      </div>
                  ) : ''}
                </Menu.Item>
              </Menu>
          ) : ''}

          <Container fluid>
            {this.props.currentUser !== '' ? (
                <div style={topMenu}>
                  <TopMenu/>
                </div>
            ) : ''}
          </Container>

        </div>
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
