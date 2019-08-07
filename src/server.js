const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:chatubademesquita@cluster0-kefiy.mongodb.net/omnistack8?retryWrites=true&w=majority', { 
    useNewUrlParser: true 
});
server.use(express.json());
server.use(routes);
server.listen(3333);