import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Transaction } from "./transaction";
import { TransactionService } from "./transaction.service";

@Injectable({
    providedIn: 'root'
})
export class TransactionStore {
    private _transactions: BehaviorSubject<Transaction[]> = new BehaviorSubject([]);

    public transactions$: Observable<Transaction[]> = this._transactions.asObservable();

    constructor(private transactionService: TransactionService) {
        this.initializeTransactionData();
    }
    
    private initializeTransactionData() {
        this.transactionService.getTransactions()
            .subscribe(transactions => this._transactions.next(transactions));
    }

    public addTransaction(transaction: Transaction) {
        this.transactionService.transactions.push(transaction);
        this.transactionService.getTransactions()
            .subscribe(transactions => {
                this._transactions.next(transactions);
            });
    }
}