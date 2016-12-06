import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  imgStr: string;
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
    // console.log(this.moveCallback);
    // this.moveCallback();
  }

}
