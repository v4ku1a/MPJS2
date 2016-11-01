var env = require('./.env')

var express = require('express');
var app = express();

var http = require('http');
var serve = http.createServer(app);
var io = require('socket.io')(serve);
var ioChat = io.of('/chat');
var ioGame = io.of('/game');

var db = require('./server/mongoose');
db(env.dbUrl);

var ioChatConnection = require('./server/sockets/chat');
var apiGame = require('./server/game');

app.post('/api/game', apiGame);

app.use(['/game', '/'], express.static('dist'));

serve.listen(env.port, function() {
    console.log('Express server listening on port ' + env.port);
});


ioChat.on('connection', ioChatConnection);
