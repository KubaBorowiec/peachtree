import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {MockTransactionsService} from './services/mock-transactions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MockTransactionsService]
})

export class AppComponent {
  ngOnInit() {  
  }
  constructor() { 
  
  }
}
