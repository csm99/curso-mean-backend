const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.post('/api/posts', (req, res, next) =>{
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added sucessfully.'
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: '1',
            title: 'First server-side post',
            content: 'dhgwiudhwihdudqwigqwi'
        },{
            id: '2',
            title: '2 server-side post',
            content: 'dhgwiudhwihdudqwigqwi'
        },{
            id: '3',
            title: '3 server-side post',
            content: 'dhgwiudhwihdudqwigqwi'
        },{
            id: '4',
            title: '4 server-side post',
            content: 'dhgwiudhwihdudqwigqwi'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    });
});

module.exports = app;
