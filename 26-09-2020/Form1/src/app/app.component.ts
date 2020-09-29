import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { User } from './user';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TDF-1';
  topics = ["Angular", "IONIC", "JAVA", "AI"];
  topicHasError = true;

  userModel = new User("Tony", "tony@gmail.com", 1234567890, "default", "morning", true);
  validateTopic(value) {
    if (value == 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
  }

  
}
