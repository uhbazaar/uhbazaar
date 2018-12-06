import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Grid, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, Link } from 'react-router-dom';
import LandingBar from './LandingBar';

class FullWidthImage extends React.Component {
  render() {
    const mainContainerStyle = {
      paddingTop: '280px',
    };

    const logoContainerStyleOne = {
      width: '200%',
      bottom: '0',
      borderRadius: '20px',
      paddingTop: '16px',
    };
    const logoContainerStyleTwo = {
      width: '200%',
      bottom: '0',
      borderRadius: '20px',
      paddingBottom: '16px',
      paddingTop: '16px',
      marginBottom: '300px',
    };
    const headerOneStyle = {
      fontFamily: 'Oswald',
      opacity: '10 !important',
      color: '#17252a',
      paddingLeft: '16px',
      paddingRight: '16px',
      fontSize: '80px',
    };

    const headerTwoStyle = {
      fontFamily: 'Oswald',
      opacity: '10 !important',
      color: '#feffff',
      paddingLeft: '150px',
      fontSize: '100px',
    };
    const headerThreeStyle = {
      fontFamily: 'Oswald',
      color: '#def2f1',
      paddingLeft: '150px',
      fontSize: '32px',
    };

    const buttonOneStyle = {
      fontFamily: 'PT Sans Caption',
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

                <Container style={logoContainerStyleOne}>
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
              <div>
                <Grid verticalAlign='middle'>
                  <Container style={logoContainerStyleTwo}>
                    <div>
                      <h1 style={headerTwoStyle}>
                        UHBAZAAR
                      </h1>
                    </div>
                    <div>
                      <h2 style={headerThreeStyle}>
                        AT THE UNIVERSITY OF HAWAIʻI AT MĀNOA </h2>
                    </div>
                  </Container>
                </Grid>
                <LandingBar/>
              </div>
          ) : ''}
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
