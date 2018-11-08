import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

export default class CategoryMenu extends React.Component {

  render() {
/*
    const itemData = [
      {
        name: 'Lawn Mower',
        image: 'lawn-mower.jpeg',
        description: 'After some years of mowing dem lawns for, its about time I retired.',
        location: '1234 Oak ln Greenbow, AL 98475',
        price: '300',
        category: 'Vehicles',
      },
    ];
*/
    const gridStyle = { marginTop: '64px' };

    return (
        <Grid className='ui link cards' verticalAlign='middle' style={gridStyle}>
          <Card.Group itemsPerRow='1'>
            <Card>
              <Card.Content>
                <Image floated='left' size='medium' src='/images/lawn-mower.jpeg' />
                <Card.Header>John Deer</Card.Header>
                <Card.Meta>
                  <span className='price'>$1200</span>
                </Card.Meta>
                <Card.Meta>
                  <span className='location'>Greenbow Alabama</span>
                </Card.Meta>
                <Card.Meta>
                  After some years of mowing dem lawns for you fine folks, its about time I retired.
                </Card.Meta>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='left' size='medium' src='/images/hardbody.jpg' />
                <Card.Header>89 Toyota Truck</Card.Header>
                <Card.Meta>
                  <span className='price'>$5000</span>
                </Card.Meta>
                <Card.Meta>
                  <span className='location'>East Oahu</span>
                </Card.Meta>
                <Card.Meta>
                  Get rust, but still runs cherry
                </Card.Meta>
              </Card.Content>
            </Card>

          </Card.Group>
        </Grid>
    );
  }
}
