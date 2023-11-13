//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Load mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true, useUnifiedTopology: true });

//Load model
const Comment = require('./models/comment.model');

//Load body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Load path
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//Load handlebars
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');