const mongoose = require("mongoose");
const express = require("express");
const app = express();
const hbs = require("hbs");
const Recipes = require("./models/recipe");
const Cooks = require("./models/cook");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))

hbs.registerPartials(__dirname + '/views/partials');

app.set("view engine", "hbs");

mongoose
    .connect('mongodb://localhost:27017/recipes-monday', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log("connected to the database");
    })
    .catch((error) => {
        console.log(error);
    })

app.use("/cooks", require("./routes/cooks"));

app.listen(3000, ()=>{
    console.log("Listening on ", 3000);
})

