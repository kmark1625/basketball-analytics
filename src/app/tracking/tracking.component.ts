import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { Team } from '../team';
import { Transaction } from '../transaction';
import { TransactionStore } from '../transaction.store';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource = new MatTableDataSource<Transaction>();

  displayedColumns: string[] = [
    'date',
    'team1',
    'team2',
    'ratio',
    'units',
    'spread',
    'outcome',
    'result'
  ];

  constructor(
      private transactionStore: TransactionStore,
      private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
      this.getTransactions();
  }

  getTransactions(): void {
      this.transactionStore.transactions$
        .subscribe(transactions => {
            // console.log("Receiving new transactions: " + transactions);
            // for (var index in transactions) {
            //   console.log(transactions[index].team2);
            // }
            this.dataSource.data = transactions;
        })
  }
}
