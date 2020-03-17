const mongoose = require("mongoose");


const CookModel = mongoose.model("cooks", {
    name:"string",
    image:"string"
});

module.exports = CookModel;