import { Injectable } from '@angular/core';
import { Istudent } from '../model/istudent';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  [x: string]: any;
  studentArr: Array<Istudent> = localStorage.getItem('studentArr')
    ? JSON.parse(localStorage.getItem('studentArr')!)
    : [];

  private EditStudent$: Subject<Istudent> = new Subject();
  editstudentObs: Observable<Istudent> = this.EditStudent$;

  constructor() {}

  editstudentemiiter(std: Istudent) {
    this.EditStudent$.next(std);
  }

  addStudent(std: Istudent) {
    this.studentArr.push(std);
    this.saveToLocalStorage();
  }

  fetchAllStudent() {
    return this.studentArr;
  }

  updatededstudent(std: Istudent) {
    let getIndex = this.studentArr.findIndex((f) => f.id === std.id);

    this.studentArr[getIndex] = std;
    this.saveToLocalStorage();
  }

  removeStudent(std: Istudent) {
    let getIndex = this.studentArr.findIndex((f) => f.id === std.id);
    this.studentArr.splice(getIndex, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('studentArr', JSON.stringify(this.studentArr));
  }
}
