const express = require("express");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/recipeLab")
.then(() => console.log("Connected to DB!"))
.catch(err => console.log(err));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use("/", require("./routes/index"));
app.use("/", require("./routes/recipes"));
app.use("/", require("./routes/recipe"));
app.use("/", require("./routes/editCook"));
app.use("/", require("./routes/createRecipe"));
app.use("/", require("./routes/createCook"));
app.use("/", require("./routes/deleteCook"));


app.listen(3000);