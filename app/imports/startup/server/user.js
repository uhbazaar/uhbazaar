import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/user/user.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.lastName} (${data.username})`);
  Users.insert(data);
}

/** Initialize the collection if empty. */
if (Users.find().count() === 0) {
  if (Meteor.settings.defaultUsers) {
    console.log('Creating default users.');
    Meteor.settings.defaultUsers.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Users', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Users.find({ username: username });
  }
  return this.ready();
});

Meteor.publish('UserSearch', function publish() {
  if (this.userId) {
    return Users.find();
  }
  return this.ready();
});
