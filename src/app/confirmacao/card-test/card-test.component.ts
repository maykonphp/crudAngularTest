import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-card-test',
  templateUrl: './card-test.component.html',
  styleUrls: ['./card-test.component.scss']
})
export class CardTestComponent implements OnInit {
 
 @Input() title: any;
 @Input() data: any;
 @Input() money: any;





  constructor() { }

  ngOnInit(): void {
  }

}
