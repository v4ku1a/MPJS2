import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';


@Component({
  selector: 'my-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameId: string;
  turn: number;
  cards: any;
  capturedCards: any = [];
  attackCard: any = {};
  cardInMotion: any;
  currentPlayer: number;
  winnerPlayer: number = -1;
  //gameObject: any;
  urlHash = document.location.hash.substr(1);
  socket = io('http://localhost:36123/game');

  constructor() {}

  ngOnInit() {

    console.log( this.urlHash );

    this.socket.emit('join-game', this.urlHash);

    this.socket.on('get', (data) => {
      // console.log(gameObject);
      // console.log('Player:' + data.player);
      this.gameId = data.gameObject._id;
      this.currentPlayer = data.player;
      this.cards = data.gameObject.cards;
      this.turn = data.gameObject.turn;
      this.winnerPlayer = this.checkEndGame();
    });

    this.socket.on('cards-update', (data) => {
      this.cards = data.cards;
      this.turn = data.turn;
      this.capturedCards = data.capturedCards;
      this.attackCard = data.attackCard;
      this.winnerPlayer = this.checkEndGame();
    });

    this.dragStart = this.dragStart.bind(this);
    this.dragDrop = this.dragDrop.bind(this);
  }

  dragStart(event, card) {
    if (card.onField) {
      event.preventDefault();
      return false;
    }
    // event.dataTransfer.setData('card', card);
    this.cardInMotion = card;
    // console.log(this);
  }

  dragDrop(event, x, y) {
    event.preventDefault();

    if (!this.cardInMotion) {
      return false;
    }
    if (this.cards.find((el) => {
      if (el.x == x && el.y == y) { return true; } 
      else { return false; }
    })) {
      return false;
    }
    // event.dataTransfer.getData("card");
    console.log('X:' + x + ' Y:' + y);
    this.cardInMotion.onField = true;
    this.cardInMotion.x = x;
    this.cardInMotion.y = y;

    // console.log(this);

    // console.log(this.cardInMotion);


    //console.log(this.cards);

    

    this.socket.emit('card-drop', {
      id: this.gameId,
      cards: this.cards,
      cardInMotion: this.cardInMotion
    });


    this.cardInMotion = false;
  }

  checkEndGame() {

    let player1Cnt = 0,
        player2Cnt = 0;

    this.cards.forEach((card) => {
      if(card.onField){
        card.player === 1 ? player1Cnt++ : player2Cnt++;
      }
    });

    if(player1Cnt + player2Cnt === 10) {
      if(player1Cnt === player2Cnt) return 0;
      if(player1Cnt > player2Cnt) return 1;
      if(player1Cnt < player2Cnt) return 2;
    }
    return -1;
  }

}
