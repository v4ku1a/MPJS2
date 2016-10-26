var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  cards: [{
    onField: Boolean,
    x: Number,
    y: Number,
    player: Number,
    imageString: String,
    attackSides: [String]
  }]
}, {collection: 'game'});

module.exports = mongoose.model('Game', GameSchema);



