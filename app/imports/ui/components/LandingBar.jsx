import React from 'react';
import { Grid, Image, Label } from 'semantic-ui-react';

export default class LandingBar extends React.Component {
  render() {
    const headerStyle2 = {
      fontFamily: 'PT Sans Caption',
      fontSize: '25px',
      color: '#feffff',
      paddingLeft: '30px',
      paddingTop: '10px',
    };

    const landingBarStyle = {
      paddingTop: '1px',
    };

    const imageStyle = { opacity: '0.9' };

    return (
        <div fluid className='background-bar'>
          <Grid divided='vertically'>
            <Grid.Row internally celled columns={2}>
              <Grid.Column container textAlign='center' verticalAlign='middle' style={landingBarStyle}>
                <Label color={'teal'} size={'massive'}>
                  WHAT IS OUR FOCUS?
                </Label>
                <p style={headerStyle2}> At UH Bazaar, the focus is the student. What UHB aims to provide is
                  a comfortable and easy experience when it comes to getting the things
                  you need. Leaving more time and energy to focus on what matters: Learning.
                </p>
              </Grid.Column>
              <Grid.Column container textAlign='center' verticalAlign='middle' style={landingBarStyle}>
                <Image style={imageStyle} centered src='/images/uh-bazaar-logo.png' size='large' circular/>
              </Grid.Column>
            </Grid.Row>
            <Grid/>
          </Grid>
        </div>
    );
  }
}
