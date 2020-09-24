import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Form1';
  email = new FormControl('');
  updateEmail(){
    this.email.setValue("raviyadav35@outlook.com");
  }

}
