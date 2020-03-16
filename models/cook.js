const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cookSchema = new Schema({
    name: {
      type: String,
      required:true
    },
    image:{
        type: String,
        default: "https://www.livinghours.com/wp-content/uploads/2016/01/how-to-become-a-better-cook.jpg"
      }
  
  });

const Cook = mongoose.model("recipes",cookSchema)

module.exports = Cook;