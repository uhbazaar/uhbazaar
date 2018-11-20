import React from 'react';
import { Header, Container, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LandingBar from './LandingBar';


export default class FullWidthImage extends React.Component {
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

    const headerTwoStyle = {
      fontFamily: 'PT Sans Caption',
      marginLeft: '150px',
      fontSize: '80px',
      color: '#084543',
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
          <Grid verticalAlign='middle'>

            <Container style={logoContainerStyle} fixed>
              <Header style={headerOneStyle} textAlign='center' size='70px'>
                CLASSIFIED ADS AND COMMUNITY NOTICES FOR THE UHM OHANA
              </Header>

            <Grid centered>
              <Link to={'/signup'}>
              <Button basic color={'black'} style={buttonOneStyle}>
                BECOME A MEMBER
              </Button>
              </Link>
               <Link to={'/signin'}>
              <Button color={'black'} style={buttonTwoStyle} >
                LOGIN
              </Button>
               </Link>
            </Grid>
            </Container>
          </Grid>
          <LandingBar/>
        </Container>
    );
  }
}
