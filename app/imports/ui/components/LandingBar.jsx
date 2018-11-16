import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

export default class LandingBar extends React.Component {
  render() {
    const headerStyle2 = {
      fontFamily: 'Anton',
      fontSize: '20px',
      color: '#feffff',
    };

    return (
        <div className='background-bar'>
          <Grid container textAlign='center' verticalAlign='middle'>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
              <Header style={headerStyle2} as='h2' icon textAlign='center'>
                <Icon name='users' circular color='grey' inverted/>
                <Header.Content style={headerStyle2}>A community for the community</Header.Content>
              </Header>
            </Grid.Row>
            <Grid.Row>
              <p style={headerStyle2}>At UH Bazaar, the focus is the student.  What UHB aims to provide is
                a comfortable and easy experience when it comes to getting the things
                you need.  Leaving more time and energy to focus on what matters: Learning.
              </p>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
