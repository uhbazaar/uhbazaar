import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    const signedOutStyle = {
      fontFamily: 'PT Sans Caption',
      paddingTop: '40vh',
      fontSize: '50px',
    };
    Meteor.logout();
    return (
        <div>
          {/* eslint-disable-next-line max-len */}
          <style>{'body { background: rgba(222,242,241, 0.7)}'}
          </style>
          <style>{'body { background-size: cover; }'}
          </style>
          <Header as="h2" textAlign="center" style={signedOutStyle}>
            <p>YOU ARE SIGNED OUT.</p>
            <Link to={'/'}>
            <h2>GO BACK TO HOME PAGE</h2>
            </Link>
          </Header>
        </div>
    );
  }
}
