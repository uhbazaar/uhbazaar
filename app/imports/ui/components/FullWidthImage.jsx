import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Grid, Button, Menu } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, Link, NavLink } from 'react-router-dom';
import LandingBar from './LandingBar';
import { Roles } from 'meteor/alanning:roles';


class FullWidthImage extends React.Component {
  render() {
    const mainContainerStyle = {
      marginTop: '300px',
      paddingBottom: '128px',
      marginBottom: '64vh',
    };
    const logoContainerStyle = {
      // backgroundColor: '#2b7a78',
      // opacity: '0.8',
      width: '200%',
      bottom: '0',
      borderRadius: '20px',
      paddingBottom: '16px',
      paddingTop: '16px',
      marginBottom: '360px',
    };
    const headerOneStyle = {
      fontFamily: 'PT Sans Caption',
      opacity: '10 !important',
      color: '#17252a',
      paddingLeft: '16px',
      paddingRight: '16px',
      fontSize: '80px',
    };
    const buttonOneStyle = {
      fontFamily: 'PT Sans Caption',
      // color: '#084543',
      // paddingLeft: '50px',
      // paddingRight: '16px',
      fontSize: '20px',

    };
    const buttonTwoStyle = {
      fontFamily: 'PT Sans Caption',
      fontSize: '20px',
      marginLeft: '50px',
    };

    return (
        <Container fluid style={mainContainerStyle}>
          {this.props.currentUser === '' ? (
          <Grid verticalAlign='middle'>

            <Container style={logoContainerStyle}>
              <Header style={headerOneStyle} textAlign='center'>
                CLASSIFIED ADS AND COMMUNITY NOTICES FOR THE UHM OHANA
              </Header>

              <Grid centered>
                <Link to={'/signup'}>
                  <Button basic color={'black'} style={buttonOneStyle}>
                    BECOME A MEMBER
                  </Button>
                </Link>
                <Link to={'/signin'}>
                  <Button color={'black'} style={buttonTwoStyle}>
                    LOGIN
                  </Button>
                </Link>
              </Grid>
            </Container>
          </Grid>
          ) : ''}

          {this.props.currentUser !== '' ? (
          <Grid verticalAlign='middle'>
            <Container style={logoContainerStyle}>
              <Header style={headerOneStyle} textAlign='center'>
                CLASSIFIED ADS AND COMMUNITY NOTICES FOR THE UHM OHANA
              </Header>
            </Container>
          </Grid>
          ) : ''}
          <LandingBar/>
        </Container>
    );
  }
}

/** Declare the types of all properties. */
FullWidthImage.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const FullWidthImageContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(FullWidthImage);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(FullWidthImageContainer);
