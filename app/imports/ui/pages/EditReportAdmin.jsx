import React from 'react';
import { Grid, Loader, Header, Segment, Button } from 'semantic-ui-react';
import { Reports, ReportSchema } from '/imports/api/report/report';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import HiddenField from 'uniforms-semantic/HiddenField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders the Page for editing a single document. */
class EditReportAdmin extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { name, description, owner, issue, progress, _id } = data;
    Reports.update(_id, { $set: { name, description, owner, issue, progress } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" inverted>Edit Contact</Header>
            <AutoForm schema={ReportSchema} onSubmit={this.submit} model={this.props.doc}>
              <Segment>
                <TextField name='name'/>
                <LongTextField name='description'/>
                <TextField name='owner'/>
                <SelectField name='issue'/>
                <SelectField name='progress'/>
                <SubmitField value='Submit'/>
                <Link to={'/admin/'}>
                  <Button floated='right'>Back</Button>
                </Link>
                <ErrorsField/>
                <HiddenField name='createdAt' value={new Date()}/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditReportAdmin.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Reports');
  return {
    doc: Reports.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditReportAdmin);
