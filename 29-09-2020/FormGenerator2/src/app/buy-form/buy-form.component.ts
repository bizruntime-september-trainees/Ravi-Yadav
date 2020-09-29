import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.scss']
})
export class BuyFormComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.dynamicForm = this.formBuilder.group({
          numberOfTickets: ['', Validators.required],
          tickets: new FormArray([])
      });
  }

  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }
  get ticketFormGroups() { return this.t.controls as FormGroup[]; }

  onChangeTickets(e) {
      const numberOfTickets = e.target.value || 0;
      if (this.t.length < numberOfTickets) {
          for (let i = this.t.length; i < numberOfTickets; i++) {
              this.t.push(this.formBuilder.group({
                  name: ['', Validators.required],
                  email: ['', [Validators.required, Validators.email]]
              }));
          }
      } else {
          for (let i = this.t.length; i >= numberOfTickets; i--) {
              this.t.removeAt(i);
          }
      }
  }

  onSubmit() {
      console.log(FormArray);
  }

  onReset() {
      // reset whole form back to initial state
      this.submitted = false;
      this.dynamicForm.reset();
      this.t.clear();
  }

  onClear() {
      // clear errors and reset ticket fields
      this.submitted = false;
      this.t.reset();
  }

}
