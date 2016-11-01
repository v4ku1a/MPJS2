var env = require('./.env')

var slash   = require('express-slash');
var express = require('express');
var app = express();

var http = require('http');
var serve = http.createServer(app);

var io = require('socket.io')(serve);
var ioChat = io.of('/chat');
var ioGame = io.of('/game');
var ioChatConnection = require('./server/sockets/chat');
var ioGameConnection = require('./server/sockets/game');

var db = require('./server/mongoose');
db(env.dbUrl);

var apiGame = require('./server/game');

// app.use(slash());

app.post('/api/game', apiGame);

app.use(['/game', '/'], express.static('dist'));

serve.listen(env.port, function() {
    console.log('Express server listening on port ' + env.port);
});


ioChat.on('connection', ioChatConnection);
ioGame.on('connection', ioGameConnection);
