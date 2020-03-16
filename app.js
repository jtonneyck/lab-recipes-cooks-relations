const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require('path');
const mongoose = require('mongoose');
const Recipe = require ('./models/recipe');
const Cook = require('./models/cook')
const bodyParser = require('body-parser');

// Handlebars, Statics, body parser
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))

// Partials
hbs.registerPartials(__dirname + '/views/partials');

// Database connection
mongoose
  .connect('mongodb://localhost/cookbook', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


// Routes
app.use("/recipes", require("./routes/recipes"));
app.use("/cooks", require("./routes/cooks"));


// Listener
app.listen(3002, ()=> {
    console.log("Webserver is listening on port 3002");
})