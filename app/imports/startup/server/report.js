import { Meteor } from 'meteor/meteor';
import { Reports } from '../../api/report/report.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.icon})`);
  Reports.insert(data);
}

/** Initialize the collection if empty. */
if (Reports.find().count() === 0) {
  if (Meteor.settings.defaultReports) {
    console.log('Creating default reports.');
    Meteor.settings.defaultReports.map(data => addData(data));
  }
}

Meteor.publish('Reports', function publish() {
  return Reports.find();
});
