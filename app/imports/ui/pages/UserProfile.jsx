import React from 'react';
import { Container, Grid, Icon, Loader, Card, Item } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { sortBy } from 'underscore';
import UserProfileCard from '../components/UserProfileCard';
import { Users } from '../../api/user/user';
import { Items } from '../../api/item/item';
import ShowcaseItem from '../components/ShowcaseItem';

class UserProfile extends React.Component {
  getItems(items, owner) {
    const stuff = sortBy(items, 'owner');
    console.log(stuff);
    return stuff.filter(item => item.owner === owner).map((item) => <ShowcaseItem key={item._id} item={item}/>);
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
