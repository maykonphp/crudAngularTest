import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'projectAngular';
  money: number = 123300;
  data: string = '2021-12-31';
  constructor() { }

  ngOnInit(): void {
  }

}
