var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  profilePicture: String,
  pictureid: {type:String, unique: true},
  likeCount: Number,
  filterid: String
});

var Item = mongoose.model('Item', itemSchema);


module.exports = Item;
