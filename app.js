const mongoose = require("mongoose");
const express = require("express");
const app = express();
const hbs = require("hbs");
const Recipes = require("./models/recipe");
const Cooks = require("./models/cook");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static("public")) 
app.set("view engine", "hbs");

mongoose
    .connect('mongodb://localhost:27017/recipes-monday', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log("connected to the database");
    })
    .catch((error) => {
        console.log(error);
    })

app.use("/", require("./routes/list"));
app.use("/detail", require("./routes/detail"))
app.use("/delete", require("./routes/delete"))
app.use("/create", require("./routes/create"))
app.use("/update", require("./routes/update"))
app.use("/create-recipe", require("./routes/createRecipe"));

app.listen(3000, ()=>{
    console.log("Listening on ", 3000);
})

