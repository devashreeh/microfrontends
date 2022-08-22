import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-micorfrontends-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayindex = 1;
  opencontent(i:any) {
    this.displayindex = i
  }

}
