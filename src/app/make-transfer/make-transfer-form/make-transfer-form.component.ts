import {Component, OnInit, Input } from '@angular/core';
import {MockTransactionsService} from  '../../services/mock-transactions.service';
import {MatDialog} from "@angular/material/dialog";
import {DialogMakeTransferComponent} from '../../dialogs/dialog-make-transfer/dialog-make-transfer.component';
import {DialogWarningComponent} from '../../dialogs/dialog-warning/dialog-warning.component';
import {MessageService} from '../../services/messeger.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const maxBalance = -500;

@Component({
  selector: 'app-make-transfer-form',
  templateUrl: './make-transfer-form.component.html',
  styleUrls: ['./make-transfer-form.component.scss']
})
export class MakeTransferFormComponent implements OnInit {
  transferForm: FormGroup;
  submitted = false;
  public userName:string="Free checking(4692)";
  public userBalance:number= -100.2;
  public amount:number; 
  public toaccount:string = '';
  decimalPatern=/^(\d+(?:[\.\,]\d{1,2})?)$/;

  constructor(public dialog: MatDialog, private transactionsService: MockTransactionsService,
  private messageService:MessageService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      toaccount: [null, [Validators.required, Validators.minLength(3)]],
      amount: [null, [Validators.required, Validators.pattern(this.decimalPatern)]]
    });
  }
  
  submitMakeTransfer(){
    this.submitted = true;
    this.amount = parseFloat(this.transferForm.controls.amount.value);
    if (this.transferForm.invalid) {
      return;
    }
    this.transferForm.controls.amount.value
    if(this.userBalance - this.amount < maxBalance) {
      this.openDialogErrorTransfer();    
    }
    else{
      this.oopenDialogMakeTransfer();
    }
  }
  openDialogErrorTransfer():void{
    const dialogRef = this.dialog.open(DialogWarningComponent,{
      width:'auto',height:'auto', autoFocus:true,
      data:{notify:'You can not overdraft their account beyond a balance of -$500.00'}});  
  }

  oopenDialogMakeTransfer():void {
    this.amount = parseFloat(this.transferForm.controls.amount.value);
    let dataForm ={userName:this.userName, userBalance: this.userBalance, toaccount:this.transferForm.controls.toaccount.value
    ,amount:this.amount}
    const dialogRef = this.dialog.open(DialogMakeTransferComponent, {
    width:'auto',height:'auto', disableClose:true, autoFocus:true,
    data:dataForm});    
    dialogRef.afterClosed().subscribe(result => {
      if(result){this.startTransfer();};
    });
  }
  
  startTransfer():void{
    this.amount = parseFloat(this.transferForm.controls.amount.value);
    let newTransaction = {
      'categoryCode': "#d51271",
      'dates.valueDate': new Date(),
      'merchant.accountNumber': "SI64397745065188826",
      'merchant.name': this.transferForm.controls.toaccount.value,
      'transaction.amountCurrency.amount': this.amount,
      'transaction.amountCurrency.currencyCode': "EUR",
      'transaction.creditDebitIndicator': "DBIT",
      'transaction.type': "Online transfer"
    }
    this.transactionsService.addTranscation(newTransaction).subscribe();
    this.messageService.updateTransactions(true,newTransaction);
    this.userBalance -= this.amount;
  }
}

