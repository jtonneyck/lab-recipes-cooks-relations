const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: {type: String},
    comment: {type: String},
    creator: {type: String},
    created: { type: Date, default: Date.now },
})

const Review = mongoose.model('Review', reviewSchema, 'reviews');

module.exports = Review;