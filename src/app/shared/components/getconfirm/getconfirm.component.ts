import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss'],
})
export class GetconfirmComponent implements OnInit {
  constructor(private _matDilogref: MatDialogRef<GetconfirmComponent>) {}

  ngOnInit(): void {}

  onClose(flag: boolean) {
    this._matDilogref.close(flag);
  }
}
