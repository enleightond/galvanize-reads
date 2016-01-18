var express = require('express');
var app = express();
var routes = require('./routes/index');

app.get('/', function (req, res) {
  res.send('/index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});