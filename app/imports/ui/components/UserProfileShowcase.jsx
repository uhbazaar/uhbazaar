import React from 'react';
import { Grid, Card, Button, Header, Image, Icon } from 'semantic-ui-react';

export default class UserShowCase extends React.Component {
  render() {
    const showcaseStyle = { marginTop: '8px', marginBottom: '128px' };
    const cardColor = { backgroundColor: '#feffff' };
    const cardFontStyle = { color: '#17252a' };
    return (
        <Grid container centered style={showcaseStyle}>

          <Grid.Row centered>
            <Header as='h2' icon textAlign='center'>
              <Icon name='trophy' circular/>
              <Header.Content>SHOWCASE</Header.Content>
            </Header>
          </Grid.Row>
          <Grid.Row columns={3}>

            <Grid.Column>
              <Card style={cardColor}>
                <Card.Content>
                  <Image rounded floated='right' size='small' src='/images/backpack.jpg'/>
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
              <Card style={cardColor}>
                <Card.Content>
                  <Image rounded floated='right' size='small' src='/images/scooter.jpeg'/>
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
              <Card style={cardColor}>
                <Card.Content>
                  <Image rounded floated='right' size='small' src='/images/textbook.jpeg'/>
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

          </Grid.Row>
        </Grid>
    );
  }
}
