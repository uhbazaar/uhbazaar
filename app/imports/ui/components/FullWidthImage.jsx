import React from 'react';
import { Header, Container, Grid, Icon } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    const containerStyle = {
      marginTop: '332px',
      paddingBottom: '128px',
      marginBottom: '64vh',
    };
    const containerStyle2 = {
      backgroundColor: '#feffff',
      opacity: '0.7',
      width: '100%',
      bottom: '0',
      borderRadius: '20px',
    };
    const headerStyle = { fontFamily: 'Baven' };
    const headerStyle2 = {
      marginTop: '728px',
      fontFamily: 'Baven',
      paddingBottom: '16px',
      paddingTop: '16px',
    };
    return (
        <Container fluid style={containerStyle}>
          <Grid verticalAlign='middle'>
            <Container centered>

              <Header style={headerStyle} textAlign='center' size='huge'>
                A Marketplace for Students, By Students
              </Header>

              <Header style={headerStyle} textAlign='center' as='h3'>
                pass down, trade up, avoid getting burned
              </Header>

              <Container fluid style={containerStyle2}>
                <Header style={headerStyle2} as='h2' icon textAlign='center'>
                  <Icon name='users' circular/>
                  <Header.Content>A community for the community</Header.Content>
                </Header>
              </Container>

            </Container>
          </Grid>
        </Container>
    );
  }
}
