import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.scss']
})
export class ClickMeComponent implements OnInit {
  clickMessage = '';
  

  ClickMe() {
    this.clickMessage = 'I am Best';
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
