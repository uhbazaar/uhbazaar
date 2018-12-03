import React from 'react';
import { Header, Container, Input, Image } from 'semantic-ui-react';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Slingshot } from 'meteor/edgee:slingshot';
import { Items } from '../../api/item/item';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

/** Renders the Page for editing a single document. */
class ItemImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      file: null,
      imagePreviewUrl: null,
    };
  }

  componentWillMount() {
    // we create this rule both on client and server
    Slingshot.fileRestrictions('image', {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: 2 * 500 * 500,
    });
  }

  upload() {
    const item = Items.findOne({ owner: Meteor.username });
    const userId = item.username;
    console.log(userId);
    const metaContext = { itemId: userId };
    const uploader = new Slingshot.Upload('fileUploads', metaContext);

    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
      if (error) {
        // Log service detailed response
        console.error('Error uploading', uploader.xhr.response);
        Bert.alert(error);
      } else {
        Items.update(item._id, { $set: { image: downloadUrl } });
      }
      this.setState({ image: downloadUrl });
    }.bind(this));
  }

  /** On successful submit, insert the data. */
  submit() {
    const item = Items.findOne({ owner: Meteor.username });
    const imageUrl = this.state.image;
    Items.update(item._id, {
      $set: { image: imageUrl },
    });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const thumbStyle = { paddingTop: '8px', paddingBottom: '8px' };
    return (
        <Container>
          <Header as='h3'>Upload an image</Header>
          <Input type="file" id="input" onChange={this.upload.bind(this)}/>
          <Container style={thumbStyle}>
            <Image size='small' rounded src={this.state.image}/>
          </Container>
        </Container>
    );
  }
}

ItemImage.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Items');
  return {
    doc: Items.findOne(documentId),
    ready: subscription.ready(),
  };
})(ItemImage);

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
