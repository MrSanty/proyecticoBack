import mongoose, { Schema, model } from 'mongoose';

const petSchema = new Schema({
  code: { type: Number, unique: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['perro', 'gato'], required: true },
  age: { type: Number, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'Client', required: false },
});

export default model('Pet', petSchema);