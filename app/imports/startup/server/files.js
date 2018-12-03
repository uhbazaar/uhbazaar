import { Meteor } from 'meteor/meteor';
import { Slingshot } from 'meteor/edgee:slingshot';

Slingshot.fileRestrictions('image', {
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
  maxSize: 1 * 512 * 512,
});

Slingshot.createDirective('fileUploads', Slingshot.S3Storage, {
  bucket: 'uhmbazaar',
  maxSize: 1 * 512 * 512,
  acl: 'public-read',
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
  AWSAccessKeyId: 'AKIAJDXGEDYNWCAMZ3MA',
  AWSSecretAccessKey: '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',
  region: 'us-west-1',

  authorize: function () {

    if (!this.userId) {
      const message = 'Please login before posting files';
      throw new Meteor.Error('Login Required', message);
    }

    return true;

  },
  key: function (file) {

    const user = Meteor.users.findOne(this.userId);
    return `{${user.username} / ${file.name}}`;
  },
});
