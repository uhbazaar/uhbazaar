import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Categories = new Mongo.Collection('Stuffs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const CategorySchema = new SimpleSchema({
  name: String,
  icon: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Categories.attachSchema(CategorySchema);

/** Make the collection and schema available to other code. */
export { Categories, CategorySchema };
