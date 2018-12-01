import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

/**
 * Signup component is similar to signin component, but we attempt to create a new user instead.
 */
export default class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission using Meteor's account mechanism. */
  handleSubmit() {
    const { email, password } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
          this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /** Display the signup form. */
  render() {
    const headerLogoutStyle = {
      fontFamily: 'PT Sans Caption',
      paddingTop: '30vh',
    };
    const signUpStyle = {
      fontFamily: 'PT Sans Caption',
    };
    const { from } = this.props.location.state || { from: { pathname: '/createuserprofile' } };
    // if correct authentication, redirect to page instead of login screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
        <div>
          {/* eslint-disable-next-line max-len */}
          <style>{'body { background: rgba(222,242,241, 0.7)  url(\'/images/valley.jpg\') no-repeat center center fixed; background-blend-mode: overlay; }'}
          </style>
          <style>{'body { background-size: cover; }'}
          </style>
        <Container style={signUpStyle}>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header style={headerLogoutStyle} as="h2" textAlign="center">
                REGISTER YOUR ACCOUNT </Header>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="E-mail address"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Button content="Submit"/>
                </Segment>
              </Form>
              <Message style={signUpStyle}>
                Already a member? <Link to="/signin">Sign in.</Link>
              </Message>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Registration was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>
          </Grid>
        </Container>
        </div>
    );
  }
}
Signup.propTypes = {
  location: PropTypes.object,
};
