import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const cudOpt = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class MockTransactionsService {

   //private  assetsURL:string= '../assets/transactions.json'
   private  apiTransactions:string='api/transactions'
   constructor(private http: HttpClient) {
   }

  getTransactions():Observable<any>{
    return this.http.get(this.apiTransactions)
    .pipe(map(res => this.unifyData(res)))
  }

  searchTransacions(textSearch):Observable<any>{
    return this.getTransactions()
    .pipe(map(res => this.filterByName(res,textSearch)))
  }
  getTransactionsByProperties(cat){
    return this.getTransactions()
    .pipe(map(res => res.forEach(el =>  el[cat])
    ))
  }
  isInTransactionPoperites(name,cat){
    return this.getTransactions()
      .pipe(map(res => res.find(el => el[cat] == name)
    ))
  }
  filterByName(res, textSearch):void{
    return res.filter(el => {
      return el['merchant.name'].toLowerCase().includes(textSearch.toLowerCase()) 
      || el['transaction.type'].toLowerCase().includes(textSearch.toLowerCase())
    }) 
  }

  addTranscation(newTransaction):Observable<any>{
    return this.http.post('api/transactions', newTransaction)
  }
  
  unifyData(data){
    data.map(function(el) {
        if(typeof el['transaction.amountCurrency.amount'] == 'string'){
          el['transaction.amountCurrency.amount'] = parseFloat(el['transaction.amountCurrency.amount']);
        }
        if(typeof el['dates.valueDate'] == 'string'){
          el['dates.valueDate'] = Date.parse(el['dates.valueDate']); 
        }
      });
      return data
    }
}

