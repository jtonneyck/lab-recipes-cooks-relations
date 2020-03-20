const mongoose = require("mongoose");

const CookModel = mongoose.model("cooks", {
    name: String,
    image: String,
    imagefile:String
});

module.exports = CookModel;