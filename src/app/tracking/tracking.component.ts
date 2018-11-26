import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { Team } from '../team';
import { Transaction } from '../transaction';
import { TransactionStore } from '../transaction.store';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.less']
})
export class TrackingComponent implements OnInit {
  selectedTeam1: Team;
  selectedTeam2: Team;
  teams = TEAMS;
  transactions: Transaction[];
  dataSource: Transaction[];

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
      this.getTransactions();
  }

  getTransactions(): void {
      this.transactionStore.transactions$
        .subscribe(transactions => {
            console.log("Receiving new transactions: " + transactions);
            this.dataSource = transactions;
        })
  }
}
