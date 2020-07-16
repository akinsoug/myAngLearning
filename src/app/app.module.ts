import { CoursesService } from "./services/courses.service";
import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import {
  ReactiveFormsModule,
  FormsModule,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToDoListsComponent } from "./to-do-lists/to-do-lists.component";
import { HomeComponent } from "./home/home.component";
import { LaptopapplicationComponent } from "./laptopapplication/laptopapplication.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { PostsComponent } from "./posts/posts.component";
import { FollowersComponent } from "./followers/followers.component";
import { CoursesComponent } from "./courses/courses.component";
import { AuthorsComponent } from "./authors/authors.component";
import { ListEmployeesComponent } from "./employees/list-employees/list-employees.component";
import { CreateEmployeeComponent } from "./employees/create-employee/create-employee.component";
import { from } from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    ToDoListsComponent,
    HomeComponent,
    LaptopapplicationComponent,
    GithubProfileComponent,
    PostsComponent,
    FollowersComponent,
    CoursesComponent,
    AuthorsComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    NoopAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild([
      { path: "followers/:id", component: GithubProfileComponent },
      { path: "followers", component: FollowersComponent },
      { path: "posts", component: PostsComponent },
      { path: "**", component: PagenotfoundComponent },
    ]),
  ],
  providers: [
    // CoursesService,//it works anyways
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
