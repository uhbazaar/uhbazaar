import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    const signedOutStyle = {
      fontFamily: 'PT Sans Caption',
      paddingTop: '20vh',
      paddingBottom: '15vh',
    };
    Meteor.logout();
    return (
        <div>
          {/* eslint-disable-next-line max-len */}
          <style>{'body { background: rgba(222,242,241, 0.7)  url(\'/images/uhsketch.png\') no-repeat center center fixed; background-blend-mode: overlay; }'}
          </style>
          <style>{'body { background-size: cover; }'}
          </style>
          <Header as="h2" textAlign="center" style={signedOutStyle}>
            <p>YOU ARE SIGNED OUT.</p>
            <Link to={'/'}>
            <h3>GO BACK TO HOME PAGE</h3>
            </Link>
          </Header>
        </div>
    );
  }
}
