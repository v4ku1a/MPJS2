import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

let cardInMotion;

@Component({
  selector: 'my-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public cards: any;
  currentPlayer: number;
  gameObject: any;
  urlHash = document.location.hash.substr(1);
  socket = io('http://localhost:36123/game');


  constructor(
  ) {}

  ngOnInit() {

    console.log( this.urlHash );

    this.socket.emit('join-game', this.urlHash);

    this.socket.on('get', (data) => {
      // console.log(gameObject);
      console.log('Player:' + data.player);
      this.currentPlayer = data.player;
      this.cards = data.gameObject.cards;
    });

  }

  dragStart(event, card) {
    // event.dataTransfer.setData('card', card);
    cardInMotion = card;
    // console.log(this);
  }

  dragDrop(event, x, y) {
    event.preventDefault();
    // event.dataTransfer.getData("card");
    console.log('X:' + x + ' Y:' + y);
    console.log(cardInMotion);
    cardInMotion.onField = true;
    cardInMotion.x = x;
    cardInMotion.y = y;
    // console.log(this);
  }

}
