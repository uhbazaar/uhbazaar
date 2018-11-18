import React from 'react';
import { Header, Container, Grid, Image } from 'semantic-ui-react';
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
      color: '#084543',
      paddingLeft: '16px',
      paddingRight: '16px',
      fontSize: '80px',
    };
    const headerTwoStyle = {
                  fontFamily: 'PT Sans Caption',
            opacity: '10 !important',
            color: '#084543',
            paddingLeft: '16px',
            paddingRight: '16px',
            fontSize: '30px',
    };

    return (
        <Container fluid style={mainContainerStyle}>
          <Grid verticalAlign='middle'>
            {/*<Container centered>*/}

            <Container style={logoContainerStyle} fixed>
              <Header style={headerOneStyle} textAlign='center' size='70px'>
                A MARKETPLACE FOR STUDENTS
              </Header>

              <Header style={headerTwoStyle} textAlign='center' as='h3'>
                {/* eslint-disable-next-line */}
                PASS DOWN, TRADE UP, DON'T GET BURNED
              </Header>
            </Container>

            {/*</Container>*/}
          </Grid>
          <LandingBar/>
        </Container>
    );
  }
}
