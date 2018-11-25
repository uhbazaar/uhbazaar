import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Icon } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    const outStyle = {
      marginBottom: '58vh',
      marginTop: '128px',
    };
    Meteor.logout();
    return (
        <Header style={outStyle} as="h2" textAlign="center">
          <p><Icon name='external alternate'/>You are signed out.</p>
        </Header>
    );
  }
}
