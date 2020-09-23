import { Component, OnInit } from '@angular/core';
class Item{
  name:string
  value:number
}

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})

export class NgSwitchComponent implements OnInit {
  items:Item[]=[
    {name:"One", value:1},
    {name:"Two", value:2},
    {name:"Three", value:3}
  ];
  selectedValue:string = "one";

  FullName:string = "Tony";

  constructor() { }

  ngOnInit(): void {
  }

}
