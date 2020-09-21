import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.scss']
})
export class KeyupComponent implements OnInit {
  values="";
  values1="";
  values2="";
  Value4 = "";
  
  OnKey(event:any){
    this.values+=event.target.value + '|';
  }
  OnKey1(event:KeyboardEvent){
    this.values1 = (event.target as HTMLInputElement).value + '|';
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
