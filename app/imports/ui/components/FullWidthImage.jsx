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
      backgroundColor: '#2b7a78',
      // opacity: '0.8',
      width: '200%',
      bottom: '0',
      borderRadius: '20px',
      paddingBottom: '16px',
      paddingTop: '16px',
      marginBottom: '360px',
    };
    const headerStyle = {
      fontFamily: 'Cinzel',
      opacity: '10 !important',
      color: '#17252a',
      paddingLeft: '16px',
      paddingRight: '16px',
    };
    return (
        <Container fluid style={mainContainerStyle}>
          <Grid verticalAlign='middle'>
            {/*<Container centered>*/}

              <Container style={logoContainerStyle} fixed>


                <Header style={headerStyle} textAlign='left' size='huge'>
                  A Marketplace for Students, By Students
                </Header>

                <Header style={headerStyle} textAlign='left' as='h3'>
                  {/* eslint-disable-next-line */}
                  pass down, trade up, don't get burned
                </Header>
              </Container>

            {/*</Container>*/}
          </Grid>
          <LandingBar/>
        </Container>
    );
  }
}
