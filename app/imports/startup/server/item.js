import { Meteor } from 'meteor/meteor';
import { Items } from '../../api/item/item.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name}`);
  console.log(`  Adding: ${data.date}`);
  console.log(`  Adding: ${data.path}`);
  console.log(`  Adding: ${data.category}`);
  console.log(`  Adding: ${data.price}`);
  console.log(`  Adding: ${data.description}`);
  console.log(`  Adding: ${data.location}`);
  console.log(`  Adding: ${data.seller}`);
  console.log(`  Adding: ${data.showCased}`);
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
