import React from 'react';
import { Grid, Header, Segment, Container, Input, Image } from 'semantic-ui-react';
import { Users, UserSchema } from '/imports/api/user/user';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Slingshot } from 'meteor/edgee:slingshot';

/** Renders the Page for editing a single document. */
class CreateUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
    this.state = {
      image: 'images/user.png',
      file: null,
      imagePreviewUrl: null,
    };
  }

  componentWillMount() {
    // we create this rule both on client and server
    Slingshot.fileRestrictions('image', {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: 1 * 512 * 512,
    });
  }

  upload() {
    const uploader = new Slingshot.Upload('fileUploads');

    /* eslint-disable-next-line no-undef */
    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
      if (error) {
        // Log service detailed response
        console.error('Error uploading', uploader.xhr.response);
        Bert.alert(error);
      }
      this.setState({ image: downloadUrl });
    }.bind(this));
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
    const { firstName, lastName, description } = data;
    const image = this.state.image;
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
    const thumbStyle = { paddingTop: '8px', paddingBottom: '8px' };
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
                  <Header as='h3'>Upload an image</Header>
                  <Input type="file" id="input" onChange={this.upload.bind(this)}/>
                  <Container style={thumbStyle}>
                    <Image size='small' rounded src={this.state.image}/>
                  </Container>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                  <HiddenField name='username' value='fakeuser@foo.com'/>
                  <HiddenField name='image' value='images/user.png'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default CreateUserProfile;
