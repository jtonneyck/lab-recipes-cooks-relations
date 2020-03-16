const mongoose = require("mongoose");
//const Recipe = require("./models/Recipe");
//const Cook = require("./models/Cook")
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

const hbs = require('hbs');
//hbs.registerPartials(__dirname + '/views/partials');

app.set("view engine", "hbs");
mongoose.connect("mongodb://localhost/recipes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((connection) => {
    console.log("connected to mongodb")
  })
  .catch((err) => {
    console.log("not connected to mongodb:", err);
  })

app.use(express.static('public'));
app.use("/recipes", require("./routes/recipes"));

app.listen(3005, () => {
  console.log("Express is listening on", 3005);
})