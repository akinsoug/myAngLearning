import { AuthorsService } from "./../services/authors.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-authors",
  templateUrl: "./authors.component.html",
  styleUrls: ["./authors.component.css"],
})
export class AuthorsComponent implements OnInit {
  title = "List of Authors";
  authors: string[];
  constructor(service: AuthorsService) {
    this.authors = service.getAthors();
  }
  ngOnInit(): void {}
  noAutho() {
    if (this.authors.length == 0) {
      return true;
    }
  }
  // ----------------------------------

  inputErrMsg = "";
  viewMode = "list";
  changeViewMode(view: string) {
    this.viewMode = view;
  }

  onAdd(newAthor: string) {
    if (newAthor) {
      this.authors.push(newAthor);
    } else {
      if (!newAthor) {
        this.inputErrMsg = "Please Enter the author name";
      }
    }
  } //end of

  onRemove(author: string) {
    let myIndex = this.authors.indexOf(author);
    this.authors.splice(myIndex, 1); //go to the index and delete 1 element
  }
  onChange(author: string, authorName: string) {
    let myIndex = this.authors.indexOf(author);
    this.authors.splice(myIndex, 1, authorName); //go to the index and delete 1 author and replace it with authorName
    // this.authors.up
  }
}
