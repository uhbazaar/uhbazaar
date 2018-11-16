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
        <Grid centered className='ui link cards' verticalAlign='middle' style={gridStyle}>
          <Card.Group itemsPerRow='1'>
            <Card>
              <Card.Content>
                <Image floated='left' size='medium' src='/images/textbook.jpeg' />
                <Card.Header>Algorithms</Card.Header>
                <Card.Meta>
                  <span className='price'>$50</span>
                </Card.Meta>
                <Card.Meta>
                  <span className='location'>Manoa</span>
                </Card.Meta>
                <Card.Meta>
                  Great read for improving your algorithmic skills.
                </Card.Meta>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='left' size='medium' src='/images/backpack.jpg' />
                <Card.Header>Backpack</Card.Header>
                <Card.Meta>
                  <span className='price'>$50</span>
                </Card.Meta>
                <Card.Meta>
                  <span className='location'>Manoa</span>
                </Card.Meta>
                <Card.Meta>
                  Nice backpack.
                </Card.Meta>
              </Card.Content>
            </Card>

          </Card.Group>
        </Grid>
    );
  }
}
