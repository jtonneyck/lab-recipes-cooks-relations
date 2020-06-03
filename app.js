const mongoose = require('mongoose');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({ extended: false }));
hbs.registerPartials(__dirname + '/views/partials');

const recipesRoute = require("./routes/recipes/list");
const detailsRecipeRoute = require("./routes/recipes/detailsRecipe");
const createRecipeRoute = require("./routes/recipes/createRecipe");
const listChefsRoute = require("./routes/cooks/listCooks");
const createChefsRoute = require("./routes/cooks/createCook");
const deleteChefsRoute = require("./routes/cooks/deleteCook");
const updateChefsRoute = require("./routes/cooks/updateCook");




const Recipe = require('./models/Recipe');
const Cook = require('./models/Cook');


const MONGODB_URI = 'mongodb://localhost:27017/cookbook';

mongoose
    .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    })
    .catch(error => {
        console.error('Error connecting to the database', error);
    });

app.use("/", recipesRoute);
app.use("/", detailsRecipeRoute);
app.use("/", listChefsRoute);
app.use("/", createChefsRoute);
app.use("/", deleteChefsRoute);
app.use("/", updateChefsRoute);
app.use("/", createRecipeRoute);

app.listen(3000, ()=> {
    console.log("Webserver is listening");
})