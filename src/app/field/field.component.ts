import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() dragDrop: any;

  constructor() {
    // Do stuff
  }



  ngOnInit() {
    // Do stuff
  }

  onDragOver(event) {
    event.preventDefault()
    //console.log(event);
  }

}
