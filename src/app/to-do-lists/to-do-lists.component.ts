import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { HttpClient } from "@angular/common/http";
import {
  trigger,
  state,
  transition,
  style,
  animation,
  animate,
} from "@angular/animations";
import { fadeTrigger } from "../animations";

@Component({
  selector: "app-to-do-lists",
  templateUrl: "./to-do-lists.component.html",
  styleUrls: ["./to-do-lists.component.css"],
  animations: [fadeTrigger],
})
export class ToDoListsComponent implements OnInit {
  // todoItem: TodoService = null;
  title = "To_Do_List";
  exampleDescription: TodoService = new TodoService(null);
  // this.exampleDescription
  toDoLists: TodoService[] = [];
  // this.examp
  editingRow;
  myPlaceHolder: string = "Add a to do item";
  // toDoDescriptionn: string='ss';
  addToDoInputValue: string = "";
  testInputValueMsg: string = "";
  testInputValueMsgTest: string = "";

  private isComplteted: boolean = false;
  toDoInputMssg: string = "";
  isTestMeClicked = false;

  constructor(private todoItem: TodoService) {
    this.exampleDescription.description = "exampleDescription1";
    this.toDoLists.push(this.exampleDescription);
    this.exampleDescription.description = "exampleDescription5";
    this.toDoLists.push(this.exampleDescription);
  }

  ngOnInit() {
    this.todoItem.getToDo().subscribe((todos) => {
      // this.todoItem.complteted = todos;
    });
  }

  addToDoList(toDoDescription: string) {
    if (toDoDescription) {
      let myTodoItem: TodoService = new TodoService(null);
      // this.todoItem = new TodoService( HttpClient);//-------------------------------------

      this.todoItem.description = toDoDescription;
      myTodoItem.description = toDoDescription;
      // this.todoItem.complteted= this.isComplteted;
      // 'is-completed': todoItem.complteted;

      // this.toDoLists.push(this.todoItem);

      this.toDoLists.push(myTodoItem);
      this.myPlaceHolder.replace(this.myPlaceHolder, null);
      this.addToDoInputValue = toDoDescription;
    } else {
      if (!toDoDescription) {
        this.toDoInputMssg = "Please Enter a To Do";
      }
    }
    // else{

    //   if(this.mainInputFieldMessageIndex < this.mainInputFieldMessages.length -1){

    //     this.mainInputFieldMessageIndex++;

    //   }else{

    //     this.mainInputFieldMessageIndex =0;

    //   }

    //   this.mainInputFieldMessage = this.mainInputFieldMessages[this.mainInputFieldMessageIndex]

    // }
  } ///end of addToDoList

  removeFromList(index: number) {
    this.toDoLists.splice(index, 1);
  }

  editItemInList(index: number, newDescription: string) {
    if (newDescription) {
      var edited: TodoService = this.addToDoList[index];

      this.toDoLists[index].description = newDescription;
      this.editingRow = -1;
    }
  }

  clearPlaceHolder(toDoDescription: string) {
    document.getElementById("inputId").textContent = ""; //.style.content.replace(toDoDescription,"");// = '';  //.value='';;
    // this.placeHolder.Nat ='';
    // toDoDescription = '';
    // #btnclr.onclick.#toDoDescriptionn.value('');
  }

  public getIsComplteted(): boolean {
    return this.isComplteted;
  }
  public setIsComplteted(value: boolean) {
    this.isComplteted = value;
  }
  public setIsComplteted2() {
    this.isComplteted = !this.isComplteted;
  }

  public setClasses() {
    let classes = {
      todo: true,
      // 'is-completed': this.
    };
  }

  onToggle(jjj: TodoService) {
    ////toggle in the ui
    this.todoItem.complteted = !this.isComplteted;
    // 'is-completed'; this.isComplteted;
    // document.getElementById("toggleId").style.textDecorationStyleline-through;;

    document.getElementById("toggleId").style.backgroundColor = "green";
    ////toggle on server
  }
  public showTestInputValueMsg(): string {
    if (this.testInputValueMsg == "") {
      this.testInputValueMsg = this.testInputValueMsg.replace(
        "",
        this.testInputValueMsg
      );
    }
    return this.testInputValueMsg;
  }
}
