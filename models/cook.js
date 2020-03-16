const mongoose = require("mongoose");

const CookModel = mongoose.model("cooks", {
  image_url: String,
  firstName: String,
  lastName: String,
  nationality: String,
  birthday: Date
});

module.exports = CookModel;