const express = require('express')
const app = express()
const mongoose = require('mongoose');
var hbs = require('hbs');
const Cook = require("./models/cook");
const Recipe = require("./models/recipe")
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



mongoose.connect('mongodb://localhost/recipesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(console.log("Connected to db"))
.catch((error)=>{
  console.log("Didnt connect to db errror", error)
})



app.use("/", require("./routes/index"));
app.use("/", require("./routes/create"));
app.use("/", require("./routes/delete"));
app.use("/", require("./routes/update"));
app.use("/", require("./routes/createRec"));
 
app.listen(3030)