const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oeuvreSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: Number, required: true },
  medium: { type: String },
  dimensions: {
    height: { type: Number },
    width: { type: Number },
    depth: { type: Number }
  },
  description: { type: String },
  file: { type: String } // Assuming you store the image URL
});

module.exports = mongoose.model('Artwork', oeuvreSchema);
