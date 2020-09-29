import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  DynamicArray:any;


  ngOnInit(): void {
    this.httpClient.get('/assets/DynamicForm.json').subscribe(data=>{
      this.DynamicArray = data;
      console.log(this.DynamicArray);
      
    });
  }

}
