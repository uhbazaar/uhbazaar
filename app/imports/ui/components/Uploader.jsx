import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { Input, Button } from 'semantic-ui-react';
import { Slingshot } from 'meteor/edgee:slingshot';
import { Users } from '../../api/user/user';

export default class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  upload() {
    const userId = Meteor.user().username;
    const user = Users.find({ owner: userId });
    const metaContext = user.image;
    const uploader = new Slingshot.Upload('fileUploads', metaContext);
    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
      if (error) {
        Bert.alert(error);
      } else {
        user.image = downloadUrl;
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
        <div>
            <Input type="file" id="input" onChange={this.upload}/>
            <Button type="submit" onClick={this.onSubmit}>Upload</Button>
        </div>
    );
  }
}
