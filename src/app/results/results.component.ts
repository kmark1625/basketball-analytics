import { Component, OnInit } from '@angular/core';
import { TransactionStore } from '../transaction.store';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {

  private data;

  constructor(private transactionStore: TransactionStore) { }

  ngOnInit() {
      this.getTransactions();
  }

  getTransactions(): void {
      this.transactionStore.transactions$
        .subscribe(transactions => {
            console.log("Receiving new transactions: " + transactions);
            this.parseTransactionData(transactions);
        })
  }

  parseTransactionData(transactions: Transaction[]): void {
      var result = [];
      var rollingSum: number = 0;
      transactions.forEach(function(transaction) {
        rollingSum += transaction.result;
        result.push([transaction.date, rollingSum])
      });
      this.data = result;
  }

  columnNames = ['Date', 'Total']

  title = "Results"
  type = "LineChart"
}
