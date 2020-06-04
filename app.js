const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");
app.use(express.static("public"));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(cookieParser())

const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");

mongoose
    .connect('mongodb://localhost:27017/recipe-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.log(err)
    })

app.use("/", require("./routes/home"));
app.use("/", require("./routes/recipes/recipes"));
app.use("/", require("./routes/recipes/detail"));
app.use("/", require("./routes/recipes/delete"));
app.use("/", require("./routes/recipes/create"));
app.use("/", require("./routes/recipes/update"));
app.use("/", require("./routes/recipes/level"));
app.use("/", require("./routes/recipes/dish"));
app.use("/", require("./routes/search/home"));
app.use("/", require("./routes/search/title"));
app.use("/", require("./routes/search/cuisine"));
app.use("/", require("./routes/cooks/cooks"));
app.use("/", require("./routes/cooks/detail"));
app.use("/", require("./routes/cooks/create"));
app.use("/", require("./routes/cooks/delete"));
app.use("/", require("./routes/cooks/update"));
app.use("/", require("./routes/recipes/reviews/create"));
app.use("/", require("./routes/users/signup"));
app.use("/", require("./routes/users/login"));

app.listen(3000, ()=> {
    console.log("Webserver is listening", 3000);
})