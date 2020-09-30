import { Component, OnDestroy, OnInit } from '@angular/core';
import {MessegeService} from '../../services/messeger.service';
import {MockTransactionsService} from './../../services/mock-transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, OnDestroy {
  public transactions=[];
  public namesMerchant:string[] = [];
  public textSearch:string;
  private subscription: any;
  public sortingControl ={
    'dateDesc':false,
    'amountDesc':false,
    'beneficiaryDesc':false,
    'active':''
  }
  constructor(private transactionsService: MockTransactionsService,
    private messegeService:MessegeService) { 
  }
  ngOnInit() {  
    this.getTransactions(); //initial data
    this.subscription = this.messegeService.getMessage().subscribe(message => {
      if (message['update']) { //from subject add new transaction one to top of transactions 
        this.transactions.unshift(message['newTransaction']);
        this.sortingControl.active='';
      }
    });
  }
    /*From Transaction API*/
  getTransactions():void{
    this.transactionsService.getTransactions()
    .subscribe( data =>{
        this.transactions = data;
    });
  }
  /*From Transaction API*/
  searchTransaction(textSearch):void {
    this.transactionsService.searchTransacions(textSearch).subscribe(data=>{
      this.transactions = data;
    }); 
  }
  /*SORTING on displayed transaction*/
  sortByAmount(sortingDesc:boolean){
    this.sortingControl.active = 'amount';
    this.sortingControl.amountDesc = !this.sortingControl.amountDesc;
    this.transactions.sort((a,b)=>a['transaction.amountCurrency.amount'] -  b['transaction.amountCurrency.amount'])
    return sortingDesc ? this.transactions : this.transactions.reverse()
  }
  sortByDate(sortingDesc:boolean){
    this.sortingControl.active = 'date';
    this.sortingControl.dateDesc  = !this.sortingControl.dateDesc;
    this.transactions.sort((a,b) => a['dates.valueDate'] - b['dates.valueDate']);
    return sortingDesc ? this.transactions : this.transactions.reverse()
  }
  sortByBeneficiary(sortingDesc:boolean){
    this.sortingControl.active = 'beneficiary';
    this.sortingControl.beneficiaryDesc  = !this.sortingControl.beneficiaryDesc;
    this.transactions.sort(this.compareBeneficiary);
    return sortingDesc ? this.transactions : this.transactions.reverse()
  }
  compareBeneficiary(a,b) {
    if ( a['merchant.name']< b['merchant.name']){
      return -1;
    }
    if ( a['merchant.name']> b['merchant.name']) {
      return 1;
    }
    return 0;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
