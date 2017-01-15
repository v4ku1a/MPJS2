
function generateImg() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function generateAttackSides() {
    var sides = [];
    var possible = ["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"];

    for (var i = 0; i < 3; i++) {
        sides.push( possible[Math.floor(Math.random() * possible.length)] );
    }

    return sides;
}

function generateCard(player) {

    return {
        player: player,

        onField: false,
        x: 0,
        y: 0,

        imageString: generateImg(),

        attackSides: generateAttackSides()
    };
}


function createGame() {
    var i, cards = [];

    for (i = 0; i < 5; i++) {
        cards.push(generateCard(1));
    }

    for (i = 0; i < 5; i++) {
        cards.push(generateCard(2));
    }

    return {cards: cards};
}


module.exports = createGame;
