import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Grid } from 'semantic-ui-react';
import { Items } from '/imports/api/item/item';
// import StuffItem from '/imports/ui/components/StuffItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Item from '/imports/ui/components/Item';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListItem extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const gridStyle = { marginTop: '64px' };
    return (
        <Container>
          <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
          <style>{'body { background-color: #def2f1; }'}</style>
          <div className='user-profile-background'>
            <Grid className='ui link cards' verticalAlign='middle' style={gridStyle}>
              <Container>
                {this.props.items.map((item) => <Item key={item._id} item={item}/>)}
              </Container>
            </Grid>
          </div>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListItem.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListItem);
