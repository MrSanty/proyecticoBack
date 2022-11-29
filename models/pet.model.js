import mongoose, { Schema, model } from 'mongoose';

const petSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['dog', 'cat'], required: true },
  owner: { type: Schema.types.ObjectId, ref: 'Client', required: false }
});

export default model('Pet', petSchema);