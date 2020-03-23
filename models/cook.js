const mongoose = require("mongoose");

const CookModel = mongoose.model("cooks", {
    name: String,
    image: String
})

module.exports = CookModel;