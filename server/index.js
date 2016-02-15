var express = require('express');

var app = express();

// static files
app.use(express.static('app'));
app.use(express.static('node_modules'));

app.listen(8000);
