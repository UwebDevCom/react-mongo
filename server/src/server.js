const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./users/users.routes');
const posts = require('./posts/posts.routes');
const comments = require('./comments/comments.routes');
const cors = require('cors');
const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/nov-18';

mongoose.connect(
    DB_URI, {useNewUrlParser: true}
);

const express = require('express');
const app = express();

const post = process.env.PORT || 8080;

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}  


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(users.route);
app.use(posts.route);
app.use(comments.route);
app.use(express.static('build'));



app.listen(post, console.log('listening to: '+post ));
