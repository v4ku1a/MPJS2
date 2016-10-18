var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MsgSchema = new Schema({
  content: {
    type: String,
    required: true
  }
}, {collection: 'chat messages'});

module.exports = mongoose.model('Msg', MsgSchema);

