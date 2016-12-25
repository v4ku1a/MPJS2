module.exports = function(cards, cardInMotion) {

    var neighbors = [
        {
            direction: 'top-left',
            x: -1,
            y: -1,
            strikeBack: 'bottom-right'
        },
        {
            direction: 'top',
            x: 0,
            y: -1,
            strikeBack: 'bottom'
        },
        {
            direction: 'top-right',
            x: 1,
            y: -1,
            strikeBack: 'bottom-left'
        },
        {
            direction: 'right',
            x: 1,
            y: 0,
            strikeBack: 'left'
        },
        {
            direction: 'bottom-right',
            x: 1,
            y: 1,
            strikeBack: 'top-left'
        },
        {
            direction: 'bottom',
            x: 0,
            y: 1,
            strikeBack: 'top'
        },
        {
            direction: 'bottom-left',
            x: -1,
            y: 1,
            strikeBack: 'top-right'
        },
        {
            direction: 'left',
            x: -1,
            y: 0,
            strikeBack: 'right'
        },
    ];

    var cardInArray = cards.find(function(el){
        if(el._id === cardInMotion._id){
            return true;
        } else {
            return false;
        }
    });

    cardInMotion.attackSides.forEach(function(attackSide){

        neighbors.forEach(function(neighbor){
            if(neighbor.direction === attackSide) {

                cards.forEach(function(el){
                    if(
                        cardInMotion.x + neighbor.x === el.x &&
                        cardInMotion.y + neighbor.y === el.y &&
                        el.attackSides.indexOf(neighbor.strikeBack) === -1                      
                    ){  
                        el.player = cardInMotion.player;
                        console.log(el);
                    } 
                });
            }
        });
    });

    // cards.find(function(el){
    //     if (el.x === cardInMotion.x - 1 &&
    //         el.y === cardInMotion.y - 1) {
            
    //     }
    // });
};