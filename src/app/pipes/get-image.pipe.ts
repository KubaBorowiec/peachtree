import { Pipe, PipeTransform } from '@angular/core';
import {MockTransactionsService} from '../services/mock-transactions.service';

@Pipe({
  name: 'getImage'
})
export class GetImagePipe implements PipeTransform {

  constructor(private transactionService:MockTransactionsService){
     
  }
  transform(name:string): string {
    (name=='' || typeof name =='undefined') ? name='no-logo.png' : name 
    return name;
  }

}
