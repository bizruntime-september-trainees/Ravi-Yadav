import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;
  dynamicFormArray: any;

  constructor(private _httpClient: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({

    });


    this._httpClient.get('/assets/DynamicFormControl.json').subscribe(data => {
      this.dynamicFormArray = data;

      this.createFormControl();
    });
  }
  createFormControl() {
    this.dynamicFormArray.forEach(element => {
      if (element.Required == true) {
        this.registrationForm.addControl(element.ID, new FormControl('', Validators.required));
      }
      else {
        this.registrationForm.addControl(element.ID, new FormControl(''));
      }
    });
    console.log(this.registrationForm);
  }
  
}
