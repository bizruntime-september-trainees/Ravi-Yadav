import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 // title = 'Project1';
  title = "Data binding using Property Binding";      
  imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png"; 
  num1:number=10;
  num2:number=20;   
  OnSave($event){
    console.log('Clicked'+$event);

  }
}
