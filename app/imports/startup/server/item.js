import { Meteor } from 'meteor/meteor';
import { Items } from '../../api/item/item.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} `);
  Items.insert(data);
}

/** Initialize the collection if empty. */
if (Items.find().count() === 0) {
  if (Meteor.settings.defaultItems) {
    console.log('Creating default Items.');
    Meteor.settings.defaultItems.map(data => addData(data));
  }
}

Meteor.publish('Items', function publish() {
  return Items.find();
});
