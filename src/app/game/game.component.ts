import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Game loading');
  }

}
