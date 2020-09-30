import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-make-transfer',
  templateUrl: './dialog-make-transfer.component.html',
  styleUrls: ['./dialog-make-transfer.component.scss']
})
export class DialogMakeTransferComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
