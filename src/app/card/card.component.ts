import { Component, OnInit, DoCheck, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, DoCheck, AfterViewInit {

  imgStr: string;
  cardStyles = {
    position: 'relative',
    top: 'auto',
    left: 'auto'
  };
  cardPlayer:string = '';
  @Input() currentCard: any;
  @Input() dragStart: any;
  @Input() capturedCards: any;
  @Input() attackCard: any;

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

    if ( this.capturedCards.indexOf(this.currentCard._id) < 0 ) {
      this.cardPlayer = this.currentCard.player;
    } else {
      this.cardPlayer = (this.currentCard.player === '1' ? '2' : '1');
    }

    if(this.attackCard._id === this.currentCard._id) {
      console.log(this.attackCard.sides);
    }
  }

  ngAfterViewInit() {
    
    if ( this.capturedCards.indexOf(this.currentCard._id) >= 0 ) {
      setTimeout(() => {
        this.cardPlayer = this.currentCard.player;
      }, 100);    
    }
  }

  ngDoCheck() {
    if ( this.currentCard.onField ) {
      this.cardStyles.position = 'absolute';
      this.cardStyles.top = 0 - 174 + this.currentCard.y * 174 + 'px';
      this.cardStyles.left = 240 - 128 + this.currentCard.x * 128 + 'px';
    }
  }

}
