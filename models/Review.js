const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  score: { type: Number, min: 0, max: 10, required: true },
  comments: { type: String, required: true },
  reviewer: { type: String },
});
reviewSchema.index({'$**': 'text'});

const Review = mongoose.model('Review', reviewSchema);


module.exports = Review;
