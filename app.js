// fSbEmxeJR9EyMr1H

const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');

const app = express();
console.log('Server started.');

mongoose.connect("mongodb+srv://charlie:fSbEmxeJR9EyMr1H@cluster0.mxpp6.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to database!');
    })
    .catch(() =>{
        console.error('Error!');
    });

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/posts/', postsRoutes);


module.exports = app;
