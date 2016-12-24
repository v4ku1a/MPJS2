import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';


@Component({
  selector: 'my-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cards: any;
  cardInMotion: any;
  currentPlayer: number;
  //gameObject: any;
  urlHash = document.location.hash.substr(1);
  socket = io('http://localhost:36123/game');

  constructor() {}

  ngOnInit() {

    console.log( this.urlHash );

    this.socket.emit('join-game', this.urlHash);

    this.socket.on('get', (data) => {
      // console.log(gameObject);
      console.log('Player:' + data.player);
      this.currentPlayer = data.player;
      this.cards = data.gameObject.cards;
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

    console.log(this.cardInMotion);
    // console.log(this);

    this.cardInMotion = 0;

    console.log(this.cards);
  }

}
