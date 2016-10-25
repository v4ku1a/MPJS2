var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  cards: {
    type: String,
    required: true
  }
}, {collection: 'game'});

module.exports = mongoose.model('Game', GameSchema);

