const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/recipeLab")
.then(() => console.log("Connected to DB!"))
.catch(err => console.log(err));

const hbs = require("hbs");
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

const session = require("express-session");

var sess = {
    secret: 'keyboard cat',
    cookie: {}
};

app.use(session(sess));

function protect(req, res, next){
    if (req.session.currentUser){
        next();
    } else {
    res.redirect("/");
    }
}

app.use("/", require("./routes/index"));
app.use("/", require("./routes/signupUser"));
app.use("/", require("./routes/loginUser"));
app.use("/recipes", protect, require("./routes/recipes"));
app.use("/", require("./routes/recipe"));
app.use("/", require("./routes/editCook"));
app.use("/", require("./routes/createRecipe"));
app.use("/", require("./routes/createCook"));
app.use("/", require("./routes/deleteCook"));

app.listen(3000);