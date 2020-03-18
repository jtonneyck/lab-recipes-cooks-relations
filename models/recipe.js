const mongoose = require('mongoose')

const RecipeModel = mongoose.model('recipes', {
    title:String,
    creator: {
        type:mongoose.Types.ObjectId,
        ref:'cooks'
    },
    image:String,
    level:String,
    duration:Number

})

module.exports = RecipeModel