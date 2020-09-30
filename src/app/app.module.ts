import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService  } from './in-memory-web-api.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CategoryCodePipe } from './pipes/category-code.pipe'
import { GetImagePipe } from './pipes/get-image.pipe';

import { MakeTransferFormComponent } from './make-transfer/make-transfer-form/make-transfer-form.component';
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';
import { TransactionOneComponent } from './transactions/transaction-one/transaction-one.component';
import { DialogMakeTransferComponent } from './dialogs/dialog-make-transfer/dialog-make-transfer.component';
import { DialogWarningComponent } from './dialogs/dialog-warning/dialog-warning.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    TransactionOneComponent,
    CategoryCodePipe,
    GetImagePipe,
    MakeTransferFormComponent,
    DialogMakeTransferComponent,
    DialogWarningComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    }),
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  entryComponents:[DialogMakeTransferComponent,  DialogWarningComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
