const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cooksSchema = new Schema({
    name: {type: String},
    image: {type: String}
})

const Cook = mongoose.model('Cook', cooksSchema, "cook");

module.exports = Cook;
   