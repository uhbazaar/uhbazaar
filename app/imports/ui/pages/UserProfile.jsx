import React from 'react';
import { Card, Image, Icon, Container, Grid, Button, Header } from 'semantic-ui-react';

class UserCard extends React.Component {
  render() {
    const cardFontStyle = { color: '#17252a' };
    const gridStyle = { marginTop: '128px' };
    const borderStyle = { border: 'solid 1px #feffff' };
    const cardColor = { backgroundColor: '#feffff' };
    return (
        <Grid container verticalAlign='middle' style={gridStyle}>
          <Container>
            <Grid verticalAlign='middle' className='user-profile-background' columns={4}>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <Image style={borderStyle} size='medium' rounded floated='left'
                         src='/images/tommy-boy.jpg'/>
                </Grid.Column>

                <Grid.Column width={8}>
                  <Card style={cardColor} floated='right' fluid>
                    <Card.Content>
                      <Header as='h1'>Tommy H.</Header>
                      <Card.Meta style={cardFontStyle}>
                        Joined in 2016
                      </Card.Meta>
                      <Card.Description style={cardFontStyle}>
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

class UserShowCase extends React.Component {
  render() {
    const showcaseStyle = { marginTop: '32px' };
    const cardColor = { backgroundColor: '#feffff' };
    const cardFontStyle = { color: '#17252a' };
    return (
        <Grid container centered style={showcaseStyle}>
          <Grid.Row columns={3}>

            <Grid.Column>
            </Grid.Column>

            <Grid.Column>
              <Card style={cardColor}>
                <Card.Content>
                  <Image rounded floated='right' size='small' src='/images/lawn-mower.jpeg'/>
                  <Header as='h3' style={cardFontStyle}>Lawn Mower</Header>
                  <Card.Meta style={cardFontStyle}>John Deere</Card.Meta>
                  <Card.Description style={cardFontStyle}>
                    This is a really superb lawn mower! Runs like a champ, great for
                    drinking Coors Light while mowing.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui center aligned'>
                    <Button basic color='blue'>
                      View
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
            </Grid.Column>

          </Grid.Row>
        </Grid>
    );
  }
}

export default class UserProfile extends React.Component {
  render() {
    return (
        <div>
          <Container>
            <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
            <style>{'body { background-color: #def2f1; }'}</style>
            <UserCard/>
            <UserShowCase/>
          </Container>
        </div>
    );
  }
}
