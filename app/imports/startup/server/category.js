import { Meteor } from 'meteor/meteor';
import { Categories } from '../../api/category/category.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.icon})`);
  Categories.insert(data);
}

/** Initialize the collection if empty. */
if (Categories.find().count() === 0) {
  if (Meteor.settings.defaultCategories) {
    console.log('Creating default Categories.');
    Meteor.settings.defaultCategories.map(data => addData(data));
  }
}

Meteor.publish('Categories', function publish() {
  return this.ready();
});
