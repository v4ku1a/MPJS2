
var GameModel = require('./models/game.model');
var createGame = require('./create-game');

var newGame = createGame(); 

function game(req, res) {

    var gameInstanse = new GameModel(newGame);

    gameInstanse.save()
        .then(function(result){
            console.log("Game inserted into db");
            console.log(result._id);

            res.send(200, result._id);
        })
        .catch(function (err) {
            console.log(err);

            res.send(500, err);
        });
}

module.exports = game;
