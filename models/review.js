const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    title: { type: String },
    score: { type: Number, required: true, min: 0, max: 10 },
    comment: { type: String }
})

const Review = mongoose.model("review", reviewSchema)

module.exports = Review;