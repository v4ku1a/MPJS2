import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gameId;

  constructor(
    private router: Router, 
    private http: Http
  ) {}

  createGame() {
    console.log(this.router);
    // this.router.navigateByUrl('/game#' + 'w897d5nh34987');

    this.http.post('/api/game', {})
      .map( res => res.json() )
      .subscribe(
        data => this.gameId = data,
        err => console.log(err),
        () => {
          this.router.navigateByUrl('/game#' + this.gameId);
        }
      );
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
