import { Component, OnInit, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, DoCheck {

  imgStr: string;
  cardStyles = {
    position: 'relative',
    top: 'auto',
    left: 'auto'
  };
  @Input() currentCard: any;
  @Input() dragStart: any;

  constructor() {
    // Do stuff
  }

  // generateStr() {
  //     let text = '';
  //     let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //     for (let i = 0; i < 5; i++) {
  //       text += possible.charAt(Math.floor(Math.random() * possible.length));
  //     }

  //     return text;
  // }

  ngOnInit() {
    this.imgStr = this.currentCard.imageString;
  }

  ngDoCheck() {
    if ( this.currentCard.onField ) {
      this.cardStyles.position = 'absolute';
      this.cardStyles.top = 0 - 174 + this.currentCard.y * 174 + 'px';
      this.cardStyles.left = 240 - 128 + this.currentCard.x * 128 + 'px';
    }
  }

}
