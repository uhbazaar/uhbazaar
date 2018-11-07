import React from 'react';
import { Card, Image, Icon, Container, Grid } from 'semantic-ui-react';

export default class UserProfile extends React.Component {
  render() {
    const cardStyle = { color: '#2b7a78' };
    return (
        <Container className='background-color'>
          <Grid verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Card floated='left' fluid style={cardStyle}>
                  <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                      Daniel is a comedian living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='gem'/>
                      10 Items for sale!
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image floated='right' src='/images/user.png'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
