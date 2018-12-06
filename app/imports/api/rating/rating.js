import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Ratings = new Mongo.Collection('Ratings');

/** Create a schema to constrain the structure of documents associated with this collection. */
const RatingSchema = new SimpleSchema({
  ratingSum: Number,
  ratingCount: Number,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Ratings.attachSchema(RatingSchema);

/** Make the collection and schema available to other code. */
export { Ratings, RatingSchema };
