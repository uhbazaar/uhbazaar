import React from 'react';
import { Image, Grid, Button, Icon, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Items } from '../../api/item/item';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ShowItem extends React.Component {
  render() {
    const gridStyle = { marginBottom: '16vh', marginTop: '128px' };
    const button = { backgroundColor: '#3aafa9', color: '#feffff' };
    const button2 = { backgroundColor: '#af563a', color: '#feffff' };
    const imageStyle = { marginTop: '16px', marginBottom: '16px' };
    const cardStyle = { backgroundColor: '#feffff' };
    return (
        <Grid style={gridStyle} centered>
          <style>{'body {background-color: #def2f1;, color: }'}</style>
          <Grid.Row columns={4}>
            <Grid.Column width={8}>
              <Card style={cardStyle} fluid>
                <Image style={imageStyle} src={this.props.item.image} size='medium' centered/>
                <Card.Content textAlign='center'>
                  <Card.Header>{this.props.item.title}</Card.Header>
                  <Card.Meta>{`$${this.props.item.price}`}</Card.Meta>
                  <Card.Description>{this.props.item.description}</Card.Description>
                </Card.Content>
                <Card.Content textAlign='center' extra>
                  <Button.Group textAlign='center'>
                    <Button animated='vertical' style={button} size='medium'>
                      <Button.Content visible>Barter!</Button.Content>
                      <Button.Content hidden>
                        <Icon name='money bill alternate'/>
                      </Button.Content>
                    </Button>
                    <Button.Or/>
                    <Button animated='fade' style={button2} size='medium'>
                      <Button.Content visible>Report</Button.Content>
                      <Button.Content hidden>
                        <Icon name='ambulance'/>
                      </Button.Content>
                    </Button>
                  </Button.Group>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
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
