import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../model/istudent';
import { StudentService } from '../../service/student.service';
import { SnackbarService } from '../../service/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentlistComponent implements OnInit {
  studentArr!: Array<Istudent>;

  constructor(
    private _studentservice: StudentService,
    private _snackbar: SnackbarService,
    private _matDilog: MatDialog
  ) {}

  ngOnInit(): void {
    this.studentArr = this._studentservice.fetchAllStudent();
  }

  onDelete(std: Istudent) {
    let MatDilogref = this._matDilog.open(GetconfirmComponent);
    MatDilogref.afterClosed().subscribe((res) => {
      if (res) {
        this._studentservice.removeStudent(res);
        this._snackbar.opensnackbar(`Student has been removed successfully!!!`);
      }
    });
  }

  onEdit(std: Istudent) {
    this._studentservice.editstudentemiiter(std);
  }
}
