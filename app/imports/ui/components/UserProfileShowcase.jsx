import React from 'react';
import { Grid, Card, Button, Icon, Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import ShowcaseItem from './ShowcaseItem';
import { Items } from '../../api/item/item';
import { Users } from '/imports/api/user/user';

class UserShowCase extends React.Component {
  render() {
    const showcaseStyle = { marginTop: '8px', marginBottom: '128px' };
    const cardColor = { backgroundColor: '#feffff' };
    const cardFontStyle = { color: '#17252a' };
    const buttonStyle = { marginTop: '16px' };
    return (
        <Grid container centered style={showcaseStyle}>

          <Card style={cardColor}>
            <Card.Content>
              <Card.Header style={cardFontStyle}><Icon name='warehouse' circular/>My Stuff</Card.Header>
            </Card.Content>
            <Card.Content>
              <Item.Group>
                {this.props.item.map((item, index) => <ShowcaseItem key={index}
                                                                 item={item}/>)}
              </Item.Group>
            </Card.Content>
          </Card>

        </Grid>
    );
  }
}

UserShowCase.propTypes = {
  item: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Items');
  return {
    item: Items.find({}).fetch(),
    ready: (subscription.ready()),
  };
})(UserShowCase);
