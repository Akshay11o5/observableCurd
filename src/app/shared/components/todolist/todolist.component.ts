import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/itodo';
import { TodoService } from '../../service/todo.service';
import { SnackbarService } from '../../service/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todoArr!: Array<Itodo>;

  constructor(
    private _todoservice: TodoService,
    private _snackbar: SnackbarService,
    private _matdilog: MatDialog
  ) {}

  ngOnInit(): void {
    this.todoArr = this._todoservice.fatchalltodo();
  }

  onEdit(todo: Itodo) {
    this._todoservice.edittodoemiiter(todo);
    // console.log(todo);
  }

  onDelete(todo: Itodo) {
    let MatDialogRef = this._matdilog.open(GetconfirmComponent);
    MatDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this._todoservice.removetodo(todo);
        this._snackbar.opensnackbar(
          `${todo.todoname} is Removed successfully!!!`
        );
      }
    });
  }
}
