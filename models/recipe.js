const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema ({
    title: { type: String, required: true },
    level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']},
    ingredients: { type: [String] },
    cuisine: { type: String, required: true },
    dishType: { type: String, enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other']},
    image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg' },
    duration: { type: Number, min: 0 },
    creator: { type: mongoose.Schema.ObjectId, ref:"cook" },
    reviews: [{type: mongoose.Schema.ObjectId, ref: "review"}],
})


recipeSchema.index( { "$**": "text" } );


const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;