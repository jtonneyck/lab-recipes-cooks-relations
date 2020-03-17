const express = require("express");
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
hbs.registerPartials(__dirname + '/views/partials');

app.set("PORT", 3000);
app.listen(app.get("PORT"), ()=> {
    console.log("Webserver is listening");
})

mongoose
.connect('mongodb://localhost/recipe_lab_week5_day1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err));

app.use("/", require("./routes/recipes"));
app.use("/", require("./routes/cook-detail"));
app.use("/", require("./routes/cook-delete"));
app.use("/", require("./routes/cook-create"));
app.use("/cook-detail", require("./routes/cook-update"));
app.use("/", require("./routes/recipe-create"));