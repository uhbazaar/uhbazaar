/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import FullWidthImage from '../components/FullWidthImage';

class UHBazaar extends React.Component {
  render() {
    return (

        <div>
          {this.props.currentUser === '' ? (
              <style>{'body { background: rgba(222,242,241, 0.7)  url(\'/images/uhsketch.png\') no-repeat center center fixed; background-blend-mode: overlay; background-size: cover; }'}
              </style>

          ) : ''}

          {this.props.currentUser !== '' ? (
              <style>{'body { background: rgba(222,242,241, 0.7)  url(\'/images/user-landing.png\') no-repeat center center fixed; background-blend-mode: overlay; background-size: cover ; }'}
              </style>
          ) : ''}
          <FullWidthImage/>
        </div>

    );
  }
}

/** Declare the types of all properties. */
UHBazaar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const UHBazaarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(UHBazaar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(UHBazaarContainer);
