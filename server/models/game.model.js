var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  cards: [{
    onField:      { type: Boolean, required: true },
    x:            { type: Number, required: true },
    y:            { type: Number, required: true },
    player:       { type: Number, required: true },
    imageString:  { type: String, required: true },
    attackSides:  [{ type: String, required: true }]
  }]
}, {collection: 'game'});

module.exports = mongoose.model('Game', GameSchema);



