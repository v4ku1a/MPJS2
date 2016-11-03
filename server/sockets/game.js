var GameModel = require('../models/game.model');

module.exports = (io) => {

	return (socket) => {
		console.log('usr connected');

		socket.on('join-game', function(id){
			console.log('Game id:' + id);
			console.log(typeof id);

			socket.join(id);

			GameModel.find({'_id': id})
				.then(function (result) {
					console.log("game found");
					socket.emit('get', result[0]);
					// io.sockets.in(id).emit('get', result[0]);
				})
				.catch(function (err) {
					console.log(err);
				});
		});

		// socket.on('disconnect', function(){
		// 	console.log('usr disconnected');
		// });
	};
};