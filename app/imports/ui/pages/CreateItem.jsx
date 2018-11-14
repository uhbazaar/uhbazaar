import React from 'react';
import { Items, ItemSchema } from '/imports/api/item/item';
import { Grid, Segment, Header, Container } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class CreateItem extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
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

  /** On submit, insert the data. */
  submit(data) {
    const { thing, quantity, condition, description } = data;
    const owner = Meteor.user().username;
    Items.insert({ thing, quantity, condition, description, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const mainContainerStyle = {
      marginTop: '128px',
      paddingBottom: '128px',
      marginBottom: '24vh',
    };
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
                  <TextField name='thing'/>
                  <NumField name='quantity' decimal={false}/>
                  <SelectField name='condition'/>
                  <LongTextField name='description'/>
                  <SubmitField value='Post'/>
                  <ErrorsField/>
                  <HiddenField name='owner' value='fakeuser@foo.com'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default CreateItem;
