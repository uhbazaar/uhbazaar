import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { Input, Button, Form } from 'semantic-ui-react';
import { Slingshot } from 'meteor/edgee:slingshot';

export default class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    Slingshot.fileRestrictions('fileUploads', {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
      maxSize: 2 * 500 * 500,
    });
  }


  upload() {
    const userId = Meteor.user()._id;
    const metaContext = { avatarId: userId };
    const uploader = new Slingshot.Upload('fileUploads', metaContext);
    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
      if (error) {
        Bert.alert(error);
      } else {
        Meteor.users.update(Meteor.userId(), { $set: { 'profile.avatar': downloadUrl } });
      }
    });
  }

  onSubmit() {
    const avatarUrl = downloadUrl;
    Meteor.users.update(Meteor.userId(), {
      $set: { profile: avatarUrl },
    });
  }

  render() {
    return (
        <div className="container">
          <Form>
            <Input type="file" id="input" onChange={this.upload}/>
            <Button type="submit" onClick={this.onSubmit}>Upload</Button>
          </Form>
        </div>
    );
  }
}
