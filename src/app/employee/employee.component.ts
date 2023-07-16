import { Component, OnInit } from '@angular/core';
import { IEmployeeData } from '../models/i-employee-data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeData: IEmployeeData[]= [];
  public showEdit:boolean;

  constructor(){

    this.showEdit=false;

  }
  public ngOnInit(): void {
    this.employeeData = [
      {
        employeeId: 1,
        firstName: "John",
        lastName: "Smith",
        salary: 10000,
        dob: new Date("10 / 10 / 2000"),
        email: "johnsmith@gmail.com",
        action: false
      }
    ]
  }

  public editEmployee() {
    this.showEdit = true;
  }
  public updateEmployee() {
    this.showEdit = false;
  }
}
