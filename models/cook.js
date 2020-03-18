const mongoose = require("mongoose");

const Schema   = mongoose.Schema;
const CookModel = new Schema({
  name: String,
  image: String
});

const Cook = mongoose.model("cooks", CookModel); //cooks = name of collection
module.exports = Cook;