const port = process.env.port || 3000;
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
//var connection = require('./connection.js');

let routes = require('./route.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    console.log('Application started on ${port}');
});