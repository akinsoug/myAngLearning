import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class EmployeeModule {
  empId: number;
  empName: string;
  empGender: string;
  empEmail?: string;
  empPhoneNumb?: number;
  empConctPrefrc: string;
  empDateOfBirth: Date;
  empDepartment: string;
  empIsActive: boolean;
  empPhotoPath?: string;
}
