import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName : new FormControl('TonyStark'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
  });
}
