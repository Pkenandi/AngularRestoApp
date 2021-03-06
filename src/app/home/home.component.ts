import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    { path: 'assets/img/img1.jpg'},
    { path: 'assets/img/img2.jpg'},
    { path: 'assets/img/img3.jpg'},
    { path: 'assets/img/img4.jpg'},
    { path: 'assets/img/img1.jpg'},
    { path: 'assets/img/img2.jpg'},
    { path: 'assets/img/img3.jpg'},
    { path: 'assets/img/img4.jpg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
