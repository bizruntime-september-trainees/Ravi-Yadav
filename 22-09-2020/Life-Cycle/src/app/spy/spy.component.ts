import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges,DoCheck } from '@angular/core';


@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.scss']
})
export class SpyComponent implements OnInit, OnChanges {
  private MyNumber: number;
  @Input() MyName:string;

  constructor() { }

  @Input()
  set MyNewNumber(number: number) {
    this.MyNumber = number;
  }
  get MyNewNumber(){
    return this.MyNumber;
  }

  
  ngOnChanges(changes:SimpleChanges) {
    const newNumberCahnges:SimpleChange = changes.MyNewNumber;
    debugger;
    console.log("ngOnChanges is invoking");
    console.log("Previous Value Before OnChanges : " + newNumberCahnges.previousValue);
    console.log("CurrentValue after OnChanges Apply : "+ newNumberCahnges.currentValue);
    this.MyNewNumber = newNumberCahnges.currentValue;

  }

  ngOnInit(): void {
    console.log("ngOnInit is invoked and Value : " + this.MyNewNumber);
  }
  ngDoCheck(){
    debugger;
    console.log(this.MyName);
  }

}
