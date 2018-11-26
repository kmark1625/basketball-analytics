import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { Transaction } from '../transaction';
import { TransactionStore } from '../transaction.store';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.less']
})
export class TransactionFormComponent implements OnInit {

  teams = TEAMS;
  transaction: Transaction = new Transaction();

  dataSource2: Transaction[];

  displayedColumns: string[] = [
        'date',
        'team1',
        'team2',
        'ratio',
        'units',
        'spread',
        'outcome',
        'result'];

  constructor(private transactionStore: TransactionStore) { }

  ngOnInit() {
      var transaction = new Transaction();
      transaction.date = new Date("November 13, 2018");
      transaction.team1 = this.transaction.team1;
      transaction.team2 = this.transaction.team2;
      transaction.ratio = this.transaction.ratio;
      transaction.units = this.transaction.units;
      transaction.spread = this.transaction.spread;
      transaction.outcome = this.transaction.outcome;
      transaction.result = 5;
      var array = [];
      array.push(transaction);
      this.dataSource2 = array;
  }

  addTransaction() {
      var transaction = new Transaction();
      transaction.date = new Date("November 13, 2018");
      transaction.team1 = this.transaction.team1;
      transaction.team2 = this.transaction.team2;
      transaction.ratio = this.transaction.ratio;
      transaction.units = this.transaction.units;
      transaction.spread = this.transaction.spread;
      transaction.outcome = this.transaction.outcome;
      transaction.result = 5;
      this.transactionStore.addTransaction(transaction);
  }
}
