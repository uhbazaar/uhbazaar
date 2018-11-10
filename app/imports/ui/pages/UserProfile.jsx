import React from 'react';
import { Container, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import UserProfileShowcase from '../components/UserProfileShowcase';
import UserProfileCard from '../components/UserProfileCard';
import { Users } from '../../api/user/user';


class UserProfile extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

    renderPage() {
    return (
        <div>
          <Container>
            <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
            <style>{'body { background-color: #def2f1; }'}</style>
            <UserProfileCard/>
            <UserProfileShowcase/>
          </Container>
        </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Users');
  return {
    user: Users.find({}).fetch(),
    ready: subscription.ready(),
  };
})(UserProfile);
