const mongoose = require("mongoose");

const RecipeModel = mongoose.model("recipes", {
    title:"string",
    level:"string",
    ingredients:"string",
    cuisine:"string",
    dishType:"string",
    image:"string",
    duration:Number,
    creator:{
        type:mongoose.Types.ObjectId,
        ref:"cooks"
    }
});

module.exports = RecipeModel;