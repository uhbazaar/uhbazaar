import React from 'react';
import { Image, Header, Grid, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Items } from '../../api/item/item';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ShowItem extends React.Component {
  render() {
    return (
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as='h2' content={this.props.item.title}/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>${this.props.item.price}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>{this.props.item.location}</Grid.Row>
          <Grid.Row><Image src={this.props.item.image} size='huge'/></Grid.Row>
          <Grid.Row>{this.props.item.description}</Grid.Row>
          <Grid.Row><Button>Buy Now</Button><Button>Make Offer</Button><Button>Report an Issue</Button></Grid.Row>
        </Grid>
    );
  }
}

/** Require a document to be passed to this component. */
ShowItem.propTypes = {
  item: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Items');
  return {
    item: Items.findOne(documentId),
    ready: subscription.ready(),
  };
})(ShowItem);
