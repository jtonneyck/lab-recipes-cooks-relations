const express = require('express')
const app = express()
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Cook = require("./models/cook");
const Recipe = require("./models/recipe");

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: true
}))

//DB connection
mongoose.connect('mongodb://localhost/recipes-cooks-relations', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((connectionInfo) => {
        console.log("connected to recipes-cooks-relations DB");
    })
    .catch((error) => {
        console.log("ERROR", error);
    });
//routes
//C
app.get('/cooks/add', (req, res, next) => {
    res.render("create");
});
app.post('/cooks/add', (req, res, next) => {
    const {
        name,
        image
    } = req.body;
    const newCook = new Cook({
        name,
        image
    })
    newCook.save()
        .then((cook) => {
            res.redirect('/cooks');
        })
});
//R list
app.get("/cooks", (req, res) => {
    Cook
        .find({})
        .then((cooksData) => {
            res.render("list", {
                cooksHbs: cooksData
            });
        })
        .catch((err) => {
            res.render("error", err);
        })
})
//R detail
app.get("/cooks/detail/:id", (req, res) => {
    Cook
        .findById(req.params.id)
        .then((cooksData) => {
            res.render("detail", {
                cooksHbs: cooksData
            });
        })
        .catch((err) => {
            res.send('error');
        })
})
//U
app.get("/cooks/update/:id", (req, res) => {
    Cook
        .findById(req.params.id)
        .then((cooksData) => {
            res.render("update", {
                cookHbs: cooksData
            });
        })
        .catch((err) => {
            res.send('error');
        })
})
app.post("/cooks/update/:id", (req, res) => {
    Cook
        .findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            image: req.body.image
        })
        .then(() => {
            res.redirect(`/cooks/detail/${req.params.id}`);
        })
        .catch((err) => {
            res.send('error', err);
        })
})
//D
app.get("/cooks/delete/:id", (req, res) => {
    Cook
        .findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/cooks");
        })
        .catch((err) => {
            res.send('error', err);
        })
})
//Recepie
//list
app.get('/recipes', (req, res) => {
    Recipe
        .find({})
        .populate('creator')
        .then((recipesData) => {
            res.render('listRecipe', {
                recipeHbs: recipesData
            })
        })
        .catch((err) => {
            res.send(err);
        })
})

//Create
app.get('/recipes/create', (req, res) => {
    Cook
        .find()
        .then(cooks => {
            res.render("createRecipe", {
                cookHbs: cooks
            })
        })
        .catch((err) => {
            res.send('error', );
        })
});
app.post('/recipes/create', (req, res) => {
    Recipe
        .create({
            title: req.body.title,
            // cuisine: req.body.cuisine,
            image: req.body.image,
            // level: req.body.level,
            // dishType: req.body.dishType,
            // duration: req.body.duration,
            creator: req.body.creator
        })
        .then(() => {
            res.redirect('/recipes');
        })
        .catch((err) => {
            res.send('error');
        })
});

//listener
app.listen(3000, () => {
    console.log("Webserver is listening");
})