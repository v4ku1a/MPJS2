
var GameModel = require('./models/game.model');

var gameExample = {
	"cards": [
		{
			"onField": true,
			"x": 1,
			"y": 2,
			"player": 1,

			"imageString": "d4f89dsg",

			"attackSides": ["top", "top-right", "bottom-right"]
		},
		{
			"onField": false,
			"x": 2,
			"y": 3,
			"player": 2,

			"imageString": "ds3g56et",

			"attackSides": ["left", "bottom", "top-right"]
		}
	]
};


function game(req, res) {

    var gameInstanse = new GameModel(gameExample);

    gameInstanse.save()
        .then(function(result){
            console.log("Game inserted into db");
            res.sendStatus(200);
        })
        .catch(function (err) {
            console.log(err);
            res.send(500, err);
        });

    // res.send('222');
}

module.exports = game;
