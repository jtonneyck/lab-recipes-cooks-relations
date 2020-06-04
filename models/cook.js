const mongoose = require("mongoose");

const cookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String }
})

const Cook = mongoose.model("cook", cookSchema)

module.exports = Cook;