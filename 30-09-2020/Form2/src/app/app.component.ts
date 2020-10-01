import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { User } from './user';
import { EnrollmentService } from './enrollment.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TDF-1';
  topics = ["Angular", "IONIC", "JAVA", "AI"];
  topicHasError = true;
  submitted = false;

  userModel = new User("Tony", "tony@gmail.com", 1234567890, "default", "morning", true);
  constructor(private _enrollmentService: EnrollmentService) { }
  validateTopic(value) {
    if (value == 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(data => console.log("Success!", data),
        error => console.log("Error!", error)
                  );
  }


}
