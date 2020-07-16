import { CreateEmployeeComponent } from "./employees/create-employee/create-employee.component";
import { AuthorsComponent } from "./authors/authors.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ToDoListsComponent } from "./to-do-lists/to-do-lists.component";
import { TodoService } from "./todo.service";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LaptopapplicationComponent } from "./laptopapplication/laptopapplication.component";
import { CoursesComponent } from "./courses/courses.component";
import { ListEmployeesComponent } from "./employees/list-employees/list-employees.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "todo", component: ToDoListsComponent },
  { path: "aplyforlaptop", component: LaptopapplicationComponent },
  { path: "course", component: CoursesComponent },
  { path: "author", component: AuthorsComponent },
  { path: "employees", component: ListEmployeesComponent },
  { path: "employees/employees", component: ListEmployeesComponent },
  { path: "employees/createemployee", component: CreateEmployeeComponent },
  {
    path: "employees/createemployee/employees",
    component: ListEmployeesComponent,
  },
  // { path: "employees/**", redirectTo: "/employees", pathMatch: "" },
  { path: "employees/", component: ListEmployeesComponent },

  // { path: 'service', component: TodoService},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
