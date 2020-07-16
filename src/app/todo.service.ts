import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  toDoUrl: string = "https://jsonplaceholder.typicode.com/todos";
  toDoLimit = "?_limit=5";

  itemId: number;
  description: string;
  complteted: boolean;

  constructor(private http: HttpClient) {}

  getToDo(): Observable<TodoService[]> {
    return this.http.get<TodoService[]>(`${this.toDoUrl}${this.toDoLimit}`);
  }
}
