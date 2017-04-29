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

app.post('/items/import', function(req,res) {

  ig.use({ access_token: '3935105810.2bcdcc7.838c9a688ebf49979803bea8f43ef8d4' });
    // ig.use({client_id: '2bcdcc72da5f4dfdb2cb45cf1bf4ffa0',
    //         client_secret: '15560117a4164d4aac2c62fa138c9a7b'
    // });
    console.log('worked');



  ig.comments('1388036442994974653', function(err, users) {
    if (err) {
      console.log(err);
    }
     console.log(users);
  });
res.end();

})

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
