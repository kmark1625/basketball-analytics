import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { Team } from '../team';
import { User } from '../user';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

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

    user: User = {
        firstName: 'New',
        lastName: 'User',
        role: 'Guest',
        notes: undefined
    };

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
      this.getTransactions();
  }

  getTransactions(): void {
      this.transactions = this.transactionService.getTransactions();
  }

}
