import { Injectable } from '@angular/core';
import { TRANSACTIONS } from './mock-transaction';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions: Transaction[];

  constructor() {
      this.transactions = TRANSACTIONS;
   }

  getTransactions(): Transaction[] {
      return this.transactions;
  }
}
