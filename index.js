var env = require('./.env')

var express = require('express');
var app = express();

var http = require('http');
var serve = http.createServer(app);

var io = require('socket.io')(serve);
var ioChat = io.of('/chat');
var ioGame = io.of('/game');
var ioChatConnection = require('./server/sockets/chat');
var ioGameConnection = require('./server/sockets/game')(io);

ioChat.on('connection', ioChatConnection);
ioGame.on('connection', ioGameConnection);

var db = require('./server/mongoose');
db(env.dbUrl);

var apiGame = require('./server/game');

app.post('/api/game', apiGame);

app.use('/css', express.static('dist/css'));
app.use('/js', express.static('dist/js'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

serve.listen(env.port, function() {
    console.log('Express server listening on port ' + env.port);
});
