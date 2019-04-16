const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./users/users.routes');
const posts = require('./posts/posts.routes');
const comments = require('./comments/comments.routes');
const cors = require('cors');
const express = require('express');
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}  
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(users.route);
app.use(posts.route);
app.use(comments.route);

app.listen(8080, console.log('listening to:8080'));
