import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-laptopapplication',
  templateUrl: './laptopapplication.component.html',
  styleUrls: ['./laptopapplication.component.css']
})
export class LaptopapplicationComponent implements OnInit {
  employeeNameTs:string=""
  employeeImailTs:string="employeeImail"
  employeeBobTs:string="employeeBoB"
  laptopMakeTs:string="laptopMake"
  employeePhoneTs:number;
  aRanger:string="";
  

  errorMessage:string;
  registrationForm:FormGroup;
  registrationId:string;


  constructor() { }

  ngOnInit(): void {
  }

  
  log(x){
    console.log(x);
  }

  register(){

  }

}
