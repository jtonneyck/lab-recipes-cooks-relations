const express = require("express");
const app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
const User = require("../models/user");

app.get("/upload-profile-pic", (req, res) => {
    res.render("user/profile-picture")
})

app.post("/upload-profile-pic", upload.single("profile-picture"), (req, res) => {
    User.findByIdAndUpdate(req.session.currentUser._id, {
            profile_pic: req.file.filename
        })
        .then((user) => {
            req.session.currentUser.profile_pic = req.file.filename;

            res.redirect("/user/upload-profile-pic")
        })
        .catch((err) => {
            res.send("err", err)
        })
})
module.exports = app