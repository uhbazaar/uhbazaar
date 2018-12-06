import React from 'react';
import { Grid, Loader, Header, Container, Image, Icon, Card, Rating, Item } from 'semantic-ui-react';
import { Users } from '/imports/api/user/user';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { size, sortBy } from 'underscore';
import { Bert } from 'meteor/themeteorchef:bert';
import ShowcaseItem from '../components/ShowcaseItem';
import { Items } from '../../api/item/item';
import { Ratings } from '../../api/rating/rating';

/** Renders the Page for editing a single document. */

class UserProfileById extends React.Component {
  constructor(props) {
    super(props);
    this.rating = this.rating;
    this.state = {
      rating: 4,
      maxRating: 5,
      disabled: false,
    };
  }

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating },
      this.setData())

  getItems(items, owner) {
    const stuff = sortBy(items, 'owner');
    if (this.getItemAmount(owner, items) !== 0) {
      return stuff.filter(item => item.owner === owner).map((item) => <ShowcaseItem key={item._id} item={item}/>);
    }
    return 'This user doesn\'t have any items to get rid of!';
  }

  getItemAmount(owner, stuff) {
    const total = stuff.filter(item => item.owner === owner);
    return size(total);
  }

  setData() {
    const myRatings = Ratings.find({ owner: this.props.doc.username }).fetch();
    if (this.state.rating !== 0) {
      const owner = this.props.doc.username;
      const ratingSum = myRatings[0].ratingSum + this.state.rating;
      const ratingCount = myRatings[0].ratingCount + 1;
      const _id = myRatings[0]._id;

      Ratings.update({ _id: _id }, { $set: { owner, ratingSum, ratingCount } }, (error) => (error ?
          Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
          Bert.alert({ type: 'success', message: 'Update succeeded' })));
      this.setState({ disabled: true });
    }
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
    const cardStyle = { backgroundColor: '#feffff', width: '600px' };
    const showcaseRow = { marginTop: '64px' };
    const showcaseStyle = { marginTop: '8px', marginBottom: '128px' };
    const background = (
        <style>{'body { background: rgba(222,242,241, 0.7) url(\'/images/canoe.jpg\') no-repeat fixed;' +
        ' background-blend-mode: overlay; background-size: cover;}'}
        </style>
    );
    const myRatings = Ratings.find({ owner: this.props.doc.username }).fetch();
    return (
        <Grid container verticalAlign='middle' style={gridStyle}>
          {background}
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
                        {`${this.getItemAmount(this.props.doc.username, this.props.items)} item(s) to barter!`}
                      </a>
                    </Card.Content>
                    <Card.Content>
                      <Rating icon='star'
                              onRate={this.handleRate}
                              rating={myRatings.length === 0 ? 3 : myRatings[0].ratingSum / myRatings[0].ratingCount}
                              maxRating={5}
                              disabled={this.state.disabled}/>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid>
              <Grid.Row style={showcaseRow}>
                <Grid container centered style={showcaseStyle}>

                  <Card fluid style={cardStyle}>
                    <Card.Content>
                      <Card.Header style={cardFontStyle}><Icon name='warehouse' circular/>The Goods</Card.Header>
                    </Card.Content>
                    <Card.Content>
                      <Item.Group divided>
                        {this.getItems(this.props.items, this.props.doc.username)}
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
  doc: PropTypes.object,
  ratings: PropTypes.array,
  ready: PropTypes.bool.isRequired,
  ready2: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('UserSearch');
  const subscription2 = Meteor.subscribe('Ratings');
  return {
    items: Items.find({}).fetch(),
    doc: Users.findOne(documentId),
    ratings: Ratings.find({}).fetch(),
    ready: subscription.ready(),
    ready2: subscription2.ready(),
  };
})(UserProfileById);
