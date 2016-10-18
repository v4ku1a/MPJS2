var env = require('./.env')

var express = require('express');
var app = express();

var http = require('http');
var serve = http.createServer(app);
var io = require('socket.io')(serve);

var db = require('./server/mongoose');
db(env.dbUrl);

var ioConnection = require('./server/io-connection');

app.use('/', express.static('dist'));

serve.listen(env.port, function() {
    console.log('Express server listening on port ' + env.port);
});

io.on('connection', ioConnection);
