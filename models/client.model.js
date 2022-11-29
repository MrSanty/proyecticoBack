import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
  code: { type: String, required: true },
  username: { type: String, required: true },
  pets: [{ type: Schema.Types.ObjectId, ref: 'Pet', required: false }]
});

export default model('Client', clientSchema);