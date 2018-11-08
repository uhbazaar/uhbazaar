import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Icon, Image, Grid } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
// import StuffItem from '/imports/ui/components/StuffItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListItems extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const gridStyle = { marginTop: '64px' };
    return (
        <div className='user-profile-background'>
          <Grid className='ui link cards' verticalAlign='middle' style={gridStyle}>
            <Container>
              <Header as="h2" textAlign="center">Category Name</Header>
              <Card.Group centered itemsPerRow={2}>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Meta>Vehicles</Card.Meta>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Meta>Vehicles</Card.Meta>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Meta>Vehicles</Card.Meta>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Meta>Vehicles</Card.Meta>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Meta>Vehicles</Card.Meta>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Meta>Vehicles</Card.Meta>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Meta>Vehicles</Card.Meta>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src='images/lawn-mower.jpeg'/>
                  <Card.Content>
                    <Card.Header>Lawn Mower</Card.Header>
                    <Card.Meta>Vehicles</Card.Meta>
                    <Card.Description>After some years of mowing dem lawns for you fine folks,
                      its about time I retired.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='money'/>
                    <span className='price'>300</span>
                  </Card.Content>
                  <Card.Content extra>
                    <span className='location'>1234 Oak ln Greenbow, AL 98475</span>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Container>
          </Grid>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListItems.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListItems);
