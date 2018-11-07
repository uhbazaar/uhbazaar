import React from 'react';
import { Card, Image, Icon, Container, Grid } from 'semantic-ui-react';

export default class UserProfile extends React.Component {
  render() {
    const cardStyle = { color: '#17252a' };
    const gridStyle = { marginTop: '128px' };
    return (
        <Grid container verticalAlign='middle' style={gridStyle}>
            <Container>
              <style>{'body { background-color: #3aafa9; }'}</style>
              <Grid verticalAlign='middle' className='user-profile-background' columns={4}>

                <Grid.Row centered>
                  <Grid.Column width={6}>
                    <Image size='medium' rounded floated='left' src='/images/tommy-boy.jpg'/>
                  </Grid.Column>

                  <Grid.Column width={8}>
                    <Card floated='right' fluid>
                      <Card.Content>
                        <Card.Header>Tommy</Card.Header>
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
        </Grid>
    );
  }
}
