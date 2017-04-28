var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var ig = require('instagram-node').instagram();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {


  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
