import { EmployeeModule } from "./../../models/employee.module";
import { DepartmentModule } from "./../../models/department/department.module";
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Interpolation } from "@angular/compiler";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker/public_api";
import { from } from "rxjs";
// inport{BsDatepickerConfig} from'
// import {EmployeeModule}

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"],
})
export class CreateEmployeeComponent implements OnInit {
  previewPhot: boolean = false;
  datePickerConfig: Partial<BsDatepickerConfig>;

  createEmployees: EmployeeModule = {
    empId: null,
    empName: null,
    empGender: null,
    empEmail: null,
    empPhoneNumb: null,
    empConctPrefrc: null,
    empDateOfBirth: null,
    empDepartment: null,
    empIsActive: null,
    empPhotoPath: "",
  };
  departments: DepartmentModule[] = [
    { deptId: 1, deptName: "Help Desk" },
    { deptId: 2, deptName: "HR" },
    { deptId: 3, deptName: "IT" },
    { deptId: 4, deptName: "Payroll" },
  ];

  /*
  
  */
  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        // showWeekNumbers: true,
        // minDate: new Date(2019, 0, 1),
        // maxDate: new Date(2020, 12, 31),
      }
    );
  }

  ngOnInit(): void {}

  saveEmployeeForm(newEmployee: EmployeeModule): void {
    console.log("empForm.value\n\n", newEmployee, "\n\n");
    console.log("empForm", newEmployee, "\n\n");
  }
  saveEmployeeForm2(empForm: NgForm): void {
    console.log("empForm.value\n\n", empForm.value, "\n\n");
    console.log("empForm", empForm, "\n\n");
  }

  togglePhotoPreview() {
    this.previewPhot = !this.previewPhot;
  }
}
