import React from 'react';
import { Grid, Loader, Header, Container, Image, Icon, Card, Rating, Item } from 'semantic-ui-react';
import { Users } from '/imports/api/user/user';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { sortBy } from 'underscore';
import ShowcaseItem from '../components/ShowcaseItem';
import { Items } from '../../api/item/item';

/** Renders the Page for editing a single document. */
class UserProfileById extends React.Component {

  getItems(items, owner) {
    const stuff = sortBy(items, 'owner');
    return stuff.filter(item => item.owner === owner).map((item) => <ShowcaseItem key={item._id} item={item}/>);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    const cardFontStyle = { color: '#17252a' };
    const gridStyle = { marginTop: '128px', marginBottom: '128px' };
    const borderStyle = { border: 'solid 1px #feffff' };
    const cardColor = { backgroundColor: '#feffff' };
    const showcaseRow = { marginTop: '64px' };
    const showcaseStyle = { marginTop: '8px', marginBottom: '128px' };
    return (
        <Grid container verticalAlign='middle' style={gridStyle}>
          <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
          <style>{'body { background-color: #def2f1; }'}</style>

          <Container>
            <Grid verticalAlign='middle' className='user-profile-background' columns={4}>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <Image style={borderStyle} size='medium' rounded floated='left'
                         src={this.props.doc.image}/>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Card style={cardColor} floated='right' fluid>
                    <Card.Content>
                      <Header as='h1'>{this.props.doc.firstName} {this.props.doc.lastName}</Header>
                      <Card.Description style={cardFontStyle}>
                        {this.props.doc.description}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='gem'/>
                        10 Items for sale!
                      </a>
                    </Card.Content>
                    <Card.Content>
                      <Rating icon='star' defaultRating={4} maxRating={5}/>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid>
              <Grid.Row style={showcaseRow}>
                <Grid container centered style={showcaseStyle}>

                  <Card fluid style={cardColor}>
                    <Card.Content>
                      <Card.Header style={cardFontStyle}><Icon name='warehouse' circular/>The Goods</Card.Header>
                    </Card.Content>
                    <Card.Content>
                      <Item.Group>
                        {this.getItems(this.props.item, this.props.doc.username)}
                      </Item.Group>
                    </Card.Content>
                  </Card>

                </Grid>
              </Grid.Row>
            </Grid>
          </Container>

        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
UserProfileById.propTypes = {
  doc: PropTypes.array,
  ready: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('UserSearch');
  return {
    item: Items.find({}).fetch(),
    doc: Users.findOne(documentId),
    ready: subscription.ready(),
  };
})(UserProfileById);
