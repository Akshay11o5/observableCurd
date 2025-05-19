import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from '../../model/itodo';
import { UuidService } from '../../service/uuid.service';
import { TodoService } from '../../service/todo.service';
import { SnackbarService } from '../../service/snackbar.service';
import { CustomRegex } from '../../validators/regex';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss'],
})
export class TodoformComponent implements OnInit {
  todoForm!: FormGroup;
  Isineditmode: boolean = false;
  edittodo!: Itodo;

  constructor(
    private _uuid: UuidService,
    private _todoservice: TodoService,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.todologinform();
    this.onPatchtodo();
  }

  todologinform() {
    this.todoForm = new FormGroup({
      todoname: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.onlyText),
      ]),
    });
  }

  onTodoSubmit() {
    if (this.todoForm.valid) {
      if (this.Isineditmode) {
        let updatetodo: Itodo = {
          ...this.todoForm.value,
          id: this.edittodo.id,
        };

        this._todoservice.updatetodo(updatetodo);
        this._snackbar.opensnackbar(
          `${updatetodo.todoname} is updated successfully!!!`
        );

        this.Isineditmode = false;
        this.todoForm.reset();
      } else {
        let newObje = {
          ...this.todoForm.value,
          id: this._uuid.generateUUID(),
        };

        // console.log(newObje);

        this._todoservice.addtodos(newObje);

        this._snackbar.opensnackbar(`New todo Added Successfully!!!`);

        this.todoForm.reset();
      }
    }
  }

  onPatchtodo() {
    this._todoservice.edittodoobs.subscribe((res) => {
      console.log(res);

      this.edittodo = res;
      this.todoForm.patchValue(res);
      this.Isineditmode = true;
    });
  }

  get f() {
    return this.todoForm.controls;
  }
}
