import React from 'react';
import { Grid, Card, Button, Icon, Feed } from 'semantic-ui-react';

export default class UserShowCase extends React.Component {
  render() {
    const showcaseStyle = { marginTop: '8px', marginBottom: '128px' };
    const cardColor = { backgroundColor: '#feffff' };
    const cardFontStyle = { color: '#17252a' };
    return (
        <Grid container centered style={showcaseStyle}>

          <Card style={cardColor}>
            <Card.Content>
              <Card.Header style={cardFontStyle}><Icon name='trophy' circular/>Showcase</Card.Header>
            </Card.Content>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Label image='/images/backpack.jpg'/>
                  <Feed.Content>
                    <Feed.Date content='1 day ago'/>
                    <Feed.Summary style={cardFontStyle}>
                      Backpack
                      <Button floated='right'>View</Button>
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image='/images/scooter.jpeg'/>
                  <Feed.Content>
                    <Feed.Date content='3 days ago'/>
                    <Feed.Summary style={cardFontStyle}>
                      Razor Scooter
                      <Button floated='right'>View</Button>
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image='/images/textbook.jpeg'/>
                  <Feed.Content>
                    <Feed.Date content='4 days ago'/>
                    <Feed.Summary style={cardFontStyle}>
                      CLRS Textbook
                      <Button floated='right'>View</Button>
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </Card>

        </Grid>
    );
  }
}
