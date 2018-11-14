import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Items = new Mongo.Collection('Items');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ItemSchema = new SimpleSchema({
  thing: String,
  quantity: Number,
  owner: String,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
  description: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Items.attachSchema(ItemSchema);

/** Make the collection and schema available to other code. */
export { Items, ItemSchema };
