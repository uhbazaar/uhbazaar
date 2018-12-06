import React from 'react';
import { Items, ItemSchema } from '/imports/api/item/item';
import { Grid, Segment, Header, Container, Input, Image, Icon } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import LongTextField from 'uniforms-semantic/LongTextField';
import NumField from 'uniforms-semantic/NumField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Slingshot } from 'meteor/edgee:slingshot';

/** Renders the Page for adding a document. */
class CreateItem extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
    this.date = new Date();
    this.state = {
      image: 'images/uhbazaarlogo.png',
      file: null,
      imagePreviewUrl: null,
      percent: 0,
    };
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  componentWillMount() {
    // we create this rule both on client and server
    Slingshot.fileRestrictions('image', {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: 1 * 1024 * 1024,
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

  /** On submit, insert the data. */
  submit(data) {
    const imageUrl = this.state.image;
    const image = imageUrl;
    const { title, price, location, category, description } = data;
    const owner = Meteor.user().username;
    const date = this.date.toLocaleDateString('en-US');
    Items.insert({ title, price, location, image, category, description, owner, date }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const mainContainerStyle = {
      marginTop: '128px',
      paddingBottom: '128px',
      marginBottom: '24vh',
    };
    const thumbStyle = { paddingTop: '8px', marginBottom: '32px' };
    return (
        <Container>
          <style>{'body { background: url(images/uh-logo.png) no-repeat center fixed; }'}</style>
          <style>{'body { background-color: #def2f1; }'}</style>
          <Grid container centered style={mainContainerStyle}>
            <Grid.Column>
              <Header as="h2" textAlign="center">Get Rid of It!</Header>
              <AutoForm ref={(ref) => {
                this.formRef = ref;
              }} schema={ItemSchema} onSubmit={this.submit}>
                <Segment>
                  <TextField name='title'/>
                  <NumField name='price' decimal={false}/>
                  <TextField name='location'/>
                  <SelectField name='category'/>
                  <LongTextField name='description'/>
                  <Segment placeholder>
                    <Header textAlign='center' icon><Icon name='image outline'/>
                      Upload an image, under 1 mb
                    </Header>
                    <Container style={thumbStyle}>
                      <Image centered size='small' rounded src={this.state.image}/>;
                    </Container>
                    <Container>
                      <Input fluid type="file" id="input" onChange={this.upload.bind(this)}/>
                    </Container>
                  </Segment>
                  <SubmitField value='submit'/>
                  <ErrorsField/>
                  <HiddenField name='owner' value='john@foo.com'/>
                  <HiddenField name='date' value='john@foo.com'/>
                  <HiddenField name='image' value='images/uhbazaarlogo.png'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default CreateItem;
