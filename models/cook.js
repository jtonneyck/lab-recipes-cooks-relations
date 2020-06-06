const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cooksSchema = new Schema({
  name : String,
  image: String
});

const Cook = mongoose.model('Cook', cooksSchema);

module.exports = Cook;