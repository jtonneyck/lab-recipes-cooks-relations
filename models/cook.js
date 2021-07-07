const mongoose = require("mongoose");

const Cook = mongoose.model("cooks", {
    name: String,
    image: {type: String, default: "https://st2.depositphotos.com/1325564/9016/i/950/depositphotos_90161346-stock-photo-man-bodybuilder-cook.jpg"},
});

module.exports = Cook;