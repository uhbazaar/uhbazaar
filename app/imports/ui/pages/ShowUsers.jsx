import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { Users } from '/imports/api/user/user';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ShowUser from '../components/ShowUser';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ShowUsers extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const styleCards = {
      marginTop: '200px',
      paddingBottom: '64px',
      marginBottom: '64vh',
    };
    if (!this.userId) {
      return (
          <Container style={styleCards}>
            <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
            <style>{'body { background-color: #def2f1; }'}</style>
            <Header as="h2" textAlign="center">Please log in to see the current users</Header>
          </Container>
    );
    }
    return (
        <Container style={styleCards}>
          <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
          <style>{'body { background-color: #def2f1; }'}</style>
          <Header as="h2" textAlign="center">Current Users</Header>
          <Card.Group centered>
            {this.props.users.map((user, index) => <ShowUser key={index}
                                                             user={user}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ShowUsers.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('UserSearch');
  return {
    users: Users.find({}).fetch(),
    ready: (subscription.ready()),
  };
})(ShowUsers);
