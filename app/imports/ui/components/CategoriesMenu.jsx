import React from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';

export default class CategoriesMenu extends React.Component {
  render() {
    const gridStyle = { marginTop: '64px' };
    return (
        <Grid className='ui link cards' verticalAlign='middle' style={gridStyle}>
        <Card.Group centered>
        <Card>
          <Card.Content >
            <Card.Header> <Icon size='big' name='book'/>Books</Card.Header>
          </Card.Content>
        </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='bed'/>Furniture</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='truck'/>Vehicles</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='heart'/>Personals</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='circle'/>Free</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='home'/>Housing</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='sticker mule'/>Pets</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
        </Grid>
    );
  }
}
