import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessegeService {
    private subject = new Subject<any>();

    updateTransactions(message:boolean,newTransaction) {
        this.subject.next({ update: message, newTransaction: newTransaction });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}