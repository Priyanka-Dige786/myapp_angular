import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees :any;
  constructor(private service: EmployeeService) { }

  ngOnInit() {
      let observableResult = this.service.getEmployees();
    observableResult.subscribe((result)=>{
      console.log(result);
      this.employees = result;
    });
    
  }

}
