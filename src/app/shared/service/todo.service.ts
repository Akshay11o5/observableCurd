import { Injectable } from '@angular/core';
import { Itodo } from '../model/itodo';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoArr: Array<Itodo> = localStorage.getItem('todoArr')
    ? JSON.parse(localStorage.getItem('todoArr')!)
    : [];

  private Edittodo$: Subject<Itodo> = new Subject();
  edittodoobs: Observable<Itodo> = this.Edittodo$;

  constructor() {}

  edittodoemiiter(todo: Itodo) {
    this.Edittodo$.next(todo);
  }

  addtodos(todo: Itodo) {
    this.todoArr.push(todo);
    this.setlocalstorage();
  }

  fatchalltodo() {
    return this.todoArr;
  }

  updatetodo(todo: Itodo) {
    let getindex = this.todoArr.findIndex((s) => s.id === todo.id);
    this.todoArr[getindex] = todo;
    this.setlocalstorage();
  }

  removetodo(removetodo: Itodo) {
    let getindex = this.todoArr.findIndex((s) => s.id === removetodo.id);
    this.todoArr.splice(getindex, 1);
    this.setlocalstorage();
  }

  setlocalstorage() {
    localStorage.setItem('todoArr', JSON.stringify(this.todoArr));
  }
}
