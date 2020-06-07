const mongoose = require('mongoose');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({ extended: false }));
hbs.registerPartials(__dirname + '/views/partials');

const recipesRoute = require("./routes/recipes/listRecipe");
const detailsRecipeRoute = require("./routes/recipes/detailsRecipe");
const createRecipeRoute = require("./routes/recipes/createRecipe");
const updateRecipeRoute = require("./routes/recipes/updateRecipe");
const deleteRecipeRoute = require("./routes/recipes/deleteRecipe");
const searchRecipeRoute = require("./routes/recipes/searchRecipe");

const listCookRoute = require("./routes/cooks/listCooks");
const createCookRoute = require("./routes/cooks/createCook");
const deleteCookRoute = require("./routes/cooks/deleteCook");
const updateCookRoute = require("./routes/cooks/updateCook");

const createReviewRoute = require("./routes/reviews/createReview");
const deleteReviewRoute = require("./routes/reviews/deleteReview");

const signupUserRoute = require("./routes/users/signup");
const loginUserRoute = require("./routes/users/login");
const logoutUserRoute = require("./routes/users/logout");


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


function protectMiddleWare(req,res,next){
    console.log("Middleware called");
    if(req.session.user){
        next();
    } else {
        res.redirect("/user/login");
    }
}

function addToNav(req,res,next){
    console.log("Middleware for nav called");
    if(req.session.user){
        res.locals.loggedIn = true;
        res.locals.user = req.session.user;
    }
    next();
}

app.use(addToNav);

app.use("/user", loginUserRoute);
app.use("/user", signupUserRoute);
app.use("/user", logoutUserRoute);

app.use("/", recipesRoute);
app.use("/recipe", searchRecipeRoute);
app.use("/recipe",protectMiddleWare, detailsRecipeRoute);
app.use("/recipe",protectMiddleWare, createRecipeRoute);
app.use("/recipe",protectMiddleWare, updateRecipeRoute);
app.use("/recipe",protectMiddleWare, deleteRecipeRoute);


app.use("/cook", listCookRoute);
app.use("/cook",protectMiddleWare, createCookRoute);
app.use("/cook",protectMiddleWare, deleteCookRoute);
app.use("/cook",protectMiddleWare, updateCookRoute);

app.use("/review",protectMiddleWare, createReviewRoute);
app.use("/review",protectMiddleWare, deleteReviewRoute);

app.listen(3000, ()=> {
    console.log("Webserver is listening");
})