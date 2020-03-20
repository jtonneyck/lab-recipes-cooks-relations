const mongoose = require('mongoose')

const RecipeModel = mongoose.model('recipes', {
    title:{
        type:String,
        required:true,
        validation: {
            validator: function(v) {
                return /^[A-Za-z]+$/.test(v)
            },
            message: prop=>`${prop} please use alphabetic characters only`
        }
    },
    creator: {
        type:mongoose.Types.ObjectId,
        ref:'cooks'
    },
    image:String,
    level:String,
    duration:Number

})

module.exports = RecipeModel