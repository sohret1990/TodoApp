const port = process.env.port || 3000;
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
//var connection = require('./connection.js');
var expressLayouts = require('express-ejs-layouts');

let routes = require('./route.js');

app.use('/Content', express.static(__dirname+ '/Content'));

app.use(expressLayouts);
app.set('view engine', ejs);
app.set('views', path.join(__dirname, 'Views'));
app.set('layout', '../Views/Shared/_Layout.ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);



app.listen(port, () => {
    console.log('Application started on ${port}');
});