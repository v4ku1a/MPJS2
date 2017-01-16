var GameModel = require('../models/game.model');
var calculateMove = require('../calculate-move');
var playersJoined = [null, false, false];

module.exports = (io) => {

	return (socket) => {
		var currentPlayer;
		console.log('usr connected');

		socket.on('join-game', function(id){
			//console.log('Game id:' + id);
			//console.log(typeof id);
			console.log('>>>>>');
			console.log(id);

			//socket.join(id);

			GameModel.find({'_id': id})
				.then(function (result) {
					if(!playersJoined[1]) {
						playersJoined[1] = true;
						currentPlayer = 1;
					} else if(!playersJoined[2]) {
						playersJoined[2] = true;
						currentPlayer = 2;
					} else {
						socket.disconnect();
					}

					console.log("game found");
					socket.emit('get', {gameObject: result[0], player: currentPlayer});
					// socket.in(id).emit('get', {gameObject: result[0], player: currentPlayer});

					
				})
				.catch(function (err) {
					console.log(err);
				});
		});

		socket.on('card-drop', function(data){
			var updatedCardsData;
			// data.cards
			//console.log(data.cardInMotion);
			updatedCardsData = calculateMove(data.cards, data.cardInMotion);

			GameModel.update({_id: data.id}, {$set: {turn: updatedCardsData.turn, cards: updatedCardsData.cards}}, function(err, raw){
				console.log(raw);
			});

			socket.emit('cards-update', updatedCardsData);
			socket.broadcast.emit('cards-update', updatedCardsData);
		});

		socket.on('disconnect', function(){
			console.log('usr disconnected');
			playersJoined[currentPlayer] = false;
		});
	};
};