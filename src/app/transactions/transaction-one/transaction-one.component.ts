import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-transaction-one',
  templateUrl: './transaction-one.component.html',
  styleUrls: ['./transaction-one.component.scss']
})
export class TransactionOneComponent implements OnInit {
  @Input() transaction:any
  ngOnInit() {  
  
  }
  constructor() { 
  }
}
