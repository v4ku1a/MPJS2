var GameModel = require('../models/game.model');

module.exports = function(socket) {
	console.log(('usr connected'));

    socket.on('get-game', function(id){
        console.log('Game id:' + id);

        GameModel.find({'_id': id}).sort('-_id').limit(1)
            .then(function (result) {
                console.log("game found");
                socket.emit('get', result[0]);
            })
            .catch(function (err) {
                console.log(err);
            });
    });

	// socket.on('disconnect', function(){
	// 	console.log('usr disconnected');
	// });

	// socket.on('chat', function(msg){
	// 	socket.broadcast.emit('chat', msg);

	// 	var modelInstance = new MsgModel({content: msg});

	// 	modelInstance.save()
	// 		.then(function(result){
	// 			console.log("chat message inserted into db: " + msg);
	// 		})
	// 		.catch(function (err) {
	// 	        console.log(err);
	// 	    });
	// });
};