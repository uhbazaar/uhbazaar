import React from 'react';
import { Header, Container, Input, Image } from 'semantic-ui-react';
import { Users } from '/imports/api/user/user';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Slingshot } from 'meteor/edgee:slingshot';

/** Renders the Page for editing a single document. */
export default class ImageUpload extends React.Component {
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
    const user = Users.findOne({ owner: Meteor.username });
    const userId = user.username;
    console.log(userId);
    const metaContext = { imageId: userId };
    const uploader = new Slingshot.Upload('fileUploads', metaContext);

    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
      if (error) {
        // Log service detailed response
        console.error('Error uploading', uploader.xhr.response);
        Bert.alert(error);
      } else {
        Users.update(user._id, { $set: { image: downloadUrl } });
      }
      this.setState({ image: downloadUrl });
    }.bind(this));
  }

  /** On successful submit, insert the data. */
  submit() {
    const user = Users.findOne({ owner: Meteor.username });
    const imageUrl = this.state.image;
    Users.update(user._id, {
      $set: { image: imageUrl },
    });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    const thumbStyle = { paddingTop: '8px', paddingBottom: '8px' };
    const user = Users.findOne({ owner: Meteor.username });
    return (
        <Container>
          <Header as='h3'>Upload an image</Header>
          <Input type="file" id="input" onChange={this.upload.bind(this)}/>
          <Container style={thumbStyle}>
            <Image size='small' rounded src={this.state.image ? this.state.image : user.image}/>
          </Container>
        </Container>
    );
  }
}
