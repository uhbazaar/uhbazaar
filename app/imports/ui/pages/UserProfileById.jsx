import React from 'react';
import { Grid, Loader, Header, Container, Image, Icon, Card } from 'semantic-ui-react';
import { Users } from '/imports/api/user/user';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import UserShowCase from '../components/UserProfileShowcase';

/** Renders the Page for editing a single document. */
class UserProfileById extends React.Component {

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
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid>
              <Grid.Row style={showcaseRow}>
                <UserShowCase/>
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
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('UserSearch');
  return {
    doc: Users.findOne(documentId),
    ready: subscription.ready(),
  };
})(UserProfileById);
