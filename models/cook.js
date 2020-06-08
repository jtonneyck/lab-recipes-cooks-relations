const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cookSchema = new Schema({
  name : String,
  image : String,
});

const Cook = mongoose.model('Cook', cookSchema, 'cooks');

module.exports = Cook;