import React from 'react';
import { Header, Container, Grid, Icon, Image } from 'semantic-ui-react';

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
    };
    const logoContainerStyle = {
      backgroundColor: '#def2f1',
      opacity: '0.8',
      width: '50%',
      bottom: '0',
      borderRadius: '20px',
      paddingBottom: '16px',
      paddingTop: '16px',
    };
    const headerStyle = {
      fontFamily: 'Baven',
      opacity: '10 !important',
      color: '#17252a',
    };
    const headerStyle2 = {
      marginTop: '600px',
      fontFamily: 'Baven',
      paddingBottom: '16px',
      paddingTop: '16px',
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
                  pass down, trade up, avoid getting burned
                </Header>
              </Container>

              <Container fluid style={infoContainerStyle}>
                <Header style={headerStyle2} as='h2' icon textAlign='center'>
                  <Icon name='users' circular/>
                  <Header.Content>A community for the community</Header.Content>
                </Header>
                <Header style={headerStyle} textAlign='center' as='h3'>
                  At UH Bazaar, the focus is the student.  What UHB aims to provide is
                  a comfortable and easy experience when it comes to getting the things
                  you need.  Leaving more time and energy to focus on what matters: Learning.
                </Header>
              </Container>

            </Container>
          </Grid>
        </Container>
    );
  }
}
