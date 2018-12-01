import React from 'react';
import { Grid, Loader, Header, Segment, Button, Container } from 'semantic-ui-react';
import { Users, UserSchema } from '/imports/api/user/user';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Uploader from '../components/Uploader';

/** Renders the Page for editing a single document. */
class EditUserProfile extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { firstName, lastName, description, image, _id } = data;
    Users.update(_id, { $set: { firstName, lastName, description, image } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    const formStyle = {
      marginTop: '64px',
      marginBottom: '64px',
      paddingBottom: '16vh',
    };
    return (
        <Container>
          <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
          <style>{'body { background-color: #def2f1; }'}</style>
          <Grid style={formStyle} container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">Edit Profile</Header>
              <AutoForm schema={UserSchema} onSubmit={this.submit} model={this.props.doc}>
                <Segment>
                  <TextField name='firstName'/>
                  <TextField name='lastName'/>
                  <LongTextField name='description'/>
                  <TextField name='image'/>
                  <Uploader/>
                  <SubmitField value='Submit'/>
                  <Link to={'/userprofile/'}>
                    <Button floated='right'>Back to Profile</Button>
                  </Link>
                  <ErrorsField/>
                  <HiddenField name='username'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditUserProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Users');
  return {
    doc: Users.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditUserProfile);
