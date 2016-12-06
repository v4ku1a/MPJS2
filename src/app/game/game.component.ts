import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";

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
  public dragging;


  constructor(
  ) {}

  ngOnInit() {
    
    console.log( this.urlHash );

    this.socket.emit('join-game', this.urlHash);

    this.socket.on('get', (data) => {
      //console.log(gameObject);
      console.log('Player:'+ data.player);
      this.currentPlayer = data.player;
      this.cards = data.gameObject.cards;
    });
   
  }

  dragStart(event, card) {  
    // console.log(card);
    // event.dataTransfer.setData('card', card);
    // event.dataTransfer.effectAllowed='move';
    // event.dataTransfer.setDragImage(event.target,0,0);
    this.dragging = card;
    console.log(this.dragging);
  }

  dragDrop(event) {
    event.preventDefault();
    // console.log(event.dataTransfer.getData('card'));
    // event.dataTransfer.getData("card");
    console.log(this.dragging);
  }

}
