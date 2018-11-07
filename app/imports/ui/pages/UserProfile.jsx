import React from 'react';
import { Card, Image, Icon, Container, Grid } from 'semantic-ui-react';

export default class UserProfile extends React.Component {
  render() {
    const cardStyle = { color: '#17252a' };
    return (
        <Container fluid className='background-color'>
          <style>{'body { background-color: #3aafa9; }'}</style>
          <Grid verticalAlign='middle' className='background-color'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image size='huge' floated='left' src='/images/tommy-boy.jpg'/>
              </Grid.Column>
              <Grid.Column width={8}>
                <Card floated='right' fluid>
                  <Card.Content>
                    <Card.Header style={cardStyle}>Tommy</Card.Header>
                    <Card.Meta style={cardStyle}>
                      Joined in 2016
                    </Card.Meta>
                    <Card.Description style={cardStyle}>
                      Tommy is a comedian living in Nashville.
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
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
