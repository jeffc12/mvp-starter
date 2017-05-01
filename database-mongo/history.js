var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/history');
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully to History');
});


var historySchema = mongoose.Schema({
  hashtag: {type: String, unique: true},
  count: Number
});

var history = mongoose.model('history', historySchema);


module.exports = history;
