const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title : String,
  rating : Number,
  review : String,
});

const Review = mongoose.model('Review', reviewSchema, 'reviews');

module.exports = Review;