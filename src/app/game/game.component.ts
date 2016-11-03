import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";

@Component({
  selector: 'my-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit() {
    let urlHash = document.location.hash.substr(1);
    let socket = io('http://localhost:36123/game');
    
    console.log( urlHash );

    socket.emit('join-game', urlHash);

    socket.on('get', (gameObject) => {
      console.log(gameObject);
    });

    
  }

}
