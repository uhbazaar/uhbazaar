import { Meteor } from 'meteor/meteor';
import { Ratings } from '../../api/rating/rating.js';

console.log('Creating default ratings.');
let owner = 'john@foo.com';
const ratingSum = 3;
const ratingCount = 1;
Ratings.insert({ owner, ratingSum, ratingCount });

owner = 'admin@foo.com';
Ratings.insert({ owner, ratingSum, ratingCount });

Meteor.publish('Ratings', function publish() {
  return Ratings.find();
});
