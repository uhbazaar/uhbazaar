import React from 'react';
import { Header, Container, Grid, Icon, Image } from 'semantic-ui-react';
import LandingBar from './LandingBar';

export default class FullWidthImage extends React.Component {
  render() {
    const mainContainerStyle = {
      marginTop: '200px',
      paddingBottom: '128px',
      marginBottom: '64vh',
    };
    const infoContainerStyle = {
      backgroundColor: '#feffff',
      opacity: '0.8',
      width: '75%',
      bottom: '0',
      borderRadius: '20px',
      padding: '0 16px 16px 16px',
    };
    const logoContainerStyle = {
      backgroundColor: '#def2f1',
      opacity: '0.8',
      width: '60%',
      bottom: '0',
      borderRadius: '20px',
      paddingBottom: '16px',
      paddingTop: '16px',
      marginBottom: '360px',
    };
    const headerStyle = {
      fontFamily: 'Baven',
      opacity: '10 !important',
      color: '#17252a',
    };
    const imageStyle = { opacity: '0.9' };
    return (
        <Container fluid style={mainContainerStyle}>
          <Grid verticalAlign='middle'>
            <Container centered>

              <Container style={logoContainerStyle} centered>
                <Image style={imageStyle} centered src='/images/uh-bazaar-logo.png' size='medium' circular/>

                <Header style={headerStyle} textAlign='center' size='huge'>
                  A Marketplace for Students, By Students
                </Header>

                <Header style={headerStyle} textAlign='center' as='h3'>
                  {/* eslint-disable-next-line */}
                  pass down, trade up, don't get burned
                </Header>
              </Container>

            </Container>
          </Grid>
          <LandingBar/>
        </Container>
    );
  }
}
