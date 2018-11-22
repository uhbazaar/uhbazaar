import React from 'react';
import { Grid, Loader, Header, Segment, Button, Container } from 'semantic-ui-react';
import { Users, UserSchema } from '/imports/api/user/user';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';

/** Renders the Page for editing a single document. */
class CreateUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On successful submit, insert the data. */
  submit(data) {
    const { firstName, lastName, description, image } = data;
    const username = Meteor.user().username;
    Users.insert({ firstName, lastName, description, image, username }, this.insertCallback);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
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
              <Header as="h2" textAlign="center">Create Your Profile</Header>
              <AutoForm ref={(ref) => { this.formRef = ref; }} schema={UserSchema} onSubmit={this.submit}>
                <Segment>
                  <TextField name='firstName'/>
                  <TextField name='lastName'/>
                  <LongTextField name='description'/>
                  <TextField name='image'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                  <HiddenField name='username' value='fakeuser@foo.com'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default CreateUserProfile;
