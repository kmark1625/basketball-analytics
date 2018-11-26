import { Injectable } from '@angular/core';
import { TRANSACTIONS } from './mock-transaction';
import { Transaction } from './transaction';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions: Transaction[];

  constructor() {
      this.transactions = TRANSACTIONS;
   }

  getTransactions(): Observable<Transaction[]> {
      return of(this.transactions);
  }
}
