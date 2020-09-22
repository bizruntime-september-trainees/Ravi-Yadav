import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Life-Cycle';
  private number:number = 100;
  name:string = "Raju";
  updateName(){
    this.name="Paju";
  }

  get Count(){
    return this.number;
  }
  set Count(value){
    this.number=value;
  }
  increment(){
    this.Count++;
  }
  decrement(){
    this.Count--;
  }

}