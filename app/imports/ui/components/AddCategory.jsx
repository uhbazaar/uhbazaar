import React from 'react';
import { Categories, CategorySchema } from '/imports/api/category/category';
import { Header, Segment, Container } from 'semantic-ui-react';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';

/** Renders the Page for adding a document. */
class AddCategory extends React.Component {

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
      Bert.alert({ type: 'danger', message: `Add note failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add note succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { name, icon } = data;
    Categories.insert({ name, icon }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Container>
          <Header as="h4" textAlign="left">Add Category</Header>
          <AutoForm ref={(ref) => {
            this.formRef = ref;
          }} schema={CategorySchema} onSubmit={this.submit}>
            <Segment>
              <TextField label='Category name' name='name'/>
              <TextField label='Icon' name='icon'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Container>
    );
  }
}

export default AddCategory;
