import { Component } from '@angular/core';
import { User } from './user';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TDF-1';
  topics = ["Angular", "IONIC", "JAVA", "AI"];
  
  userModel = new User("Tony", "tony@gmail.com", 1234567890, " ", "Morning", true);
}
