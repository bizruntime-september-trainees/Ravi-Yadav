import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
   <h3> You Selected department with ID: {{departmentID}}  </h3>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

public departmentID;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentID= id;
  }

}
