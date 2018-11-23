import React from 'react';
import { Container, Grid, Icon, Loader, Card, Item, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { size, sortBy } from 'underscore';
import UserProfileCard from '../components/UserProfileCard';
import { Users } from '../../api/user/user';
import { Items } from '../../api/item/item';
import OwnerShowcaseItem from '../components/OwnerShowcaseItem';

class UserProfile extends React.Component {

  getItems(items, owner) {
    const stuff = sortBy(items, 'owner');
    if (this.getItemAmount(owner, items) !== 0) {
      return stuff.filter(item => item.owner === owner).map((item) => <OwnerShowcaseItem key={item._id}
                                                                                    item={item}/>);
    }
    return <Link to='/createitem'><Button>Add Something!</Button></Link>;
  }

  getItemAmount(owner, stuff) {
    const total = stuff.filter(item => item.owner === owner);
    return size(total);
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const cardFontStyle = { color: '#17252a' };
    const cardStyle = { backgroundColor: '#feffff', width: '600px' };
    const showcaseRow = { marginTop: '64px' };
    const showcaseStyle = { marginTop: '8px', marginBottom: '128px' };
    return (
        <div>
          <Container>
            <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
            <style>{'body { background-color: #def2f1; }'}</style>
            <UserProfileCard/>
            <Grid>
              <Grid.Row style={showcaseRow}>
                <Grid container centered style={showcaseStyle}>

                  <Card style={cardStyle}>
                    <Card.Content>
                      <Card.Header style={cardFontStyle}><Icon name='warehouse' circular/>The Goods</Card.Header>
                    </Card.Content>
                    <Card.Content>
                      <Item.Group>
                        {this.getItems(this.props.item, this.props.user.username)}
                      </Item.Group>
                    </Card.Content>

                  </Card>

                </Grid>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

UserProfile.propTypes = {
  item: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Users');
  return {
    item: Items.find({}).fetch(),
    user: Users.findOne(),
    ready: subscription.ready(),
  };
})(UserProfile);
