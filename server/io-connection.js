var MsgModel = require('./model');

module.exports = function(socket) {
	console.log(('usr connected'));

	MsgModel.find().sort('-_id').limit(5)
	    .then(function (result) {
	        console.log("msgs sent");
			socket.emit('chat', result);
	    })
	    .catch(function (err) {
	        console.log(err);
	    });

	socket.on('disconnect', function(){
		console.log('usr disconnected');
	});

	socket.on('chat', function(msg){
		socket.broadcast.emit('chat', msg);

		var modelInstance = new MsgModel({content: msg});

		modelInstance.save()
			.then(function(result){
				console.log("chat message inserted into db: " + msg);
			})
			.catch(function (err) {
		        console.log(err);
		    });
	});
};