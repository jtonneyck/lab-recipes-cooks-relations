const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;

const Cook = require("./cook")
const Review = require("./review")

const recipesSchema = new Schema({
    title: { type: String, required: true },
    level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] },
    ingredients: { type: [String] },
    cuisine: { type: String },
    dishType: { type: String, enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other'] },
    image: { type: String, default: "https://images.media-allrecipes.com/images/75131.jpg" },
    duration: { type: Number, min: 0 },
    created: { type: Date, default: Date.now },
    creator: { type: Schema.ObjectId, ref: 'Cook' },
    reviews: [{ type: Schema.ObjectId, ref: "Review" }],
})

const Recipe = mongoose.model('Recipe', recipesSchema, 'recipes');

module.exports = Recipe;

