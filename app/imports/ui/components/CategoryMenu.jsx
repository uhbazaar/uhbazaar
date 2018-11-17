import React from 'react';
import { Grid, Card, Image, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class CategoryMenu extends React.Component {

  render() {

    return (
        <Grid centered className='ui link cards'>
          <Container>
          <Card.Group itemsPerRow='3'>
            <Card>
              <Image src='/images/textbook.jpeg' />
              <Card.Content>
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
              <Image src='/images/backpack.jpg' />
              <Card.Content>
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
          </Container>
        </Grid>
    );
  }
}
export default withRouter(CategoryMenu);
