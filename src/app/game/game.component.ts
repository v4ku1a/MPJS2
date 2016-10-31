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
    let socket = io();


    console.log( urlHash );
    
  }

}
