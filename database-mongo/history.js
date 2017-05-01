var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/history');

var db = mongoose.connection;



var historySchema = mongoose.Schema({
  hashtag: {type: String, unique: true},
  count: Number
});

var history = mongoose.model('History', historySchema);


module.exports = history;
