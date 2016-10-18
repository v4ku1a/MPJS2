'use strict';

var mongoose = require('mongoose');

module.exports = function(dbUrl) {
    mongoose.Promise = require('Q').Promise;
    mongoose.connect(dbUrl);

    mongoose.connection
        .on('connected', function() {console.log('Mongoose default connection open')})
        .on('error', function(err) {console.log('Mongoose default connection error  ${err}')})
        .on('disconnected', function() {console.log('Mongoose default connection disconnected')});

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {process.exit(0)});
    });
};
