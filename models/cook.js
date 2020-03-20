const mongoose = require("mongoose");

const CookModel = mongoose.model("cooks", {
    name: {
        type:String,
        required:true,
        validation: {
            validator: function(v) {
                return /^[A-Za-z]+$/.test(v)
            },
            message: prop=>`${prop} please use alphabetic characters only`
        }
    },
    image: String,
    imagefile:String
});

module.exports = CookModel;