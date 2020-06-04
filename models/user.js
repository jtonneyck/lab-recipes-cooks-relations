const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String },
    password: { type: String }
}, 
{
    timestamps: true
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;