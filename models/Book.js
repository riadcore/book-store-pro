const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String }, // optional for image upload later
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
