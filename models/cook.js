const mongoose = require("mongoose");

const Cook = mongoose.model("cooks", {
    name: String,
    image: String
})

module.exports = Cook;