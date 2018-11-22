import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { Team } from '../team';
import { User } from '../user';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

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
      this.transactionService.getTransactions()
        .subscribe(transactions => this.dataSource = transactions)
  }

    displayedColumns: string[] = [
        'date', 
        'team1', 
        'team2', 
        'ratio',
        'units',
        'spread',
        'outcome',
        'result'];
    // dataSource = ELEMENT_DATA;
}
