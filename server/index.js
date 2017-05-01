var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo/index');
var history = require('../database-mongo/history')
var requests = require('request');
var ig = require('instagram-api');


var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// for TEST COLLECTION
app.post('/items/import', function(req,res) {

  var accessToken = '3935105810.2bcdcc7.838c9a688ebf49979803bea8f43ef8d4';
  var igAPI = new ig(accessToken);

  igAPI.userSelfMedia().then(function(result) {

    console.log(result.limit); // api limit
    console.log(result.remaining) // api request remaining

    for(var i=0; i<result.data.length;i++) {

      var newAdd = new items({
        profilePicture: result.data[i].user.profile_picture,
        pictureid: result.data[i].created_time,
        likeCount: result.data[i].likes.count,
        filterid: result.data[i]['filter']
      });

      newAdd.save(function(err,data) {
        if (err) {
          console.log(err);
        } else {
        console.log('data saved');
      }
      });

    }

    res.end();

  })
})

app.get('/items/drop', function(req, res) {
  console.log('in drop');
  items.remove({}, function(err) {
   console.log('collection removed')
   res.end();
});

})

app.get('/items', function (req, res) {
  items.find({},(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log(data);
      res.json(data);
    }
  })
)
});


//FOR HISTORY
app.post('/history/imports', function(req, res) {
  var accessToken = '3935105810.2bcdcc7.838c9a688ebf49979803bea8f43ef8d4';
  var igAPI = new ig(accessToken);

igAPI.tag(req.body.tag).then(function(result) {

  console.log('data from hashtag', result.data);

  var hist = new history({
    hastag: result.data.tag,
    count: result.data.count
  })

  hist.save(function(err,data) {
    if(err) {
      console.log('history was not saved');
    } else {
      console.log('history saved');
    }

  })

})

  res.end()

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


// FOR SIGNING IN
// ig.use({ access_token: '3935105810.2bcdcc7.838c9a688ebf49979803bea8f43ef8d4' });
//
// var parameters = {"q": "X",
//               "scope": "public_content",
//               "access_token": "zzzzzzzzzzzzz"}
//
// request()
// response = requests.get("https://api.instagram.com/v1/tags/search",
//                         params=parameters)
// ig.user('3935105810', function(err, users, left) {
//   if (err) {
//     console.log(err);
//   }
//
//   console.log("calls left per hour:", left);
//    console.log("user:", users);
// });
//
// ig.user_search('chichenandwaffle', function(err, users, remaining, limit) {
//
//   console.log(remaining);
//   console.log(JSON.stringify());
// });
//
// ig.likes('1484377061468292168', function(err, result, remaining, limit) {
//   if(err) {
//     console.log(err);
//   }
//   console.log(result);
// });
