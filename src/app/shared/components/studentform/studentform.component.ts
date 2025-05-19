import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';
import { Istudent } from '../../model/istudent';
import { CustomRegex } from '../../validators/regex';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss'],
})
export class StudentformComponent implements OnInit {
  studentForm!: FormGroup;
  IsinEditmode: boolean = false;
  editstudent!: Istudent;

  constructor(
    private _studentservice: StudentService,
    private _uuid: UuidService,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.studentloginform();
    this.onPatchStudent();
  }

  studentloginform() {
    this.studentForm = new FormGroup({
      fname: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.onlyText),
      ]),
      lname: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.onlyText),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.email),
      ]),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.contact),
      ]),
    });
  }

  onSubmit() {
    // console.log(this.studentForm.value);

    if (this.studentForm.valid) {
      if (this.IsinEditmode) {
        let updatedstudent: Istudent = {
          ...this.studentForm.value,
          id: this.editstudent.id,
        };
        this._studentservice.updatededstudent(updatedstudent);
        this.IsinEditmode = false;
        this.studentForm.reset();
        this._snackbar.opensnackbar(
          `${updatedstudent.fname} is updated successfully!!!`
        );
      } else {
        let newObj = {
          ...this.studentForm.value,
          id: this._uuid.generateUUID(),
        };
        console.log(newObj);

        this._studentservice.addStudent(newObj);
        this.studentForm.reset();
        this._snackbar.opensnackbar(`New Student Added Successfully!!!`);
      }
    }
  }

  onPatchStudent() {
    this._studentservice.editstudentObs.subscribe((res) => {
      this.editstudent = res;
      this.studentForm.patchValue(res);
      this.IsinEditmode = true;
    });
  }

  get f() {
    return this.studentForm.controls;
  }
}
