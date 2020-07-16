import { EmployeeModule } from "./../../models/employee.module";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"],
})
export class ListEmployeesComponent implements OnInit {
  employees: EmployeeModule[] = [
    {
      empId: 1,
      empName: "Mark",
      empGender: "Male",
      empConctPrefrc: "Email",
      empEmail: "mark@adjotech.com",
      empDateOfBirth: new Date("10/25/1988"),
      empDepartment: "IT",
      empIsActive: true,
      empPhotoPath: "assets/images/employeesImg/mark.PNG", //D:\2020\MyAngular\2020Angular\myapptest\src\assets\images\employeesImg\mark.PNG
    },
    {
      empId: 2,
      empName: "Mary",
      empGender: "Female",
      empConctPrefrc: "Phone",
      empPhoneNumb: 2345978640,
      empDateOfBirth: new Date("11/20/1979"),
      empDepartment: "HR",
      empIsActive: true,
      empPhotoPath: "assets/images/employeesImg/mary.PNG",
    },
    {
      empId: 3,
      empName: "John",
      empGender: "Male",
      empConctPrefrc: "Phone",
      empPhoneNumb: 5432978640,
      empDateOfBirth: new Date("3/25/1979"),
      empDepartment: "IT",
      empIsActive: true,
      empPhotoPath: "assets/images/employeesImg/john.PNG",
    },
    {
      empId: null,
      empName: null,
      empGender: null,
      empEmail: null,
      empPhoneNumb: null,
      empConctPrefrc: null,
      empDateOfBirth: null,
      empDepartment: null,
      empIsActive: null,
      empPhotoPath: null,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  clickMe() {}
}
