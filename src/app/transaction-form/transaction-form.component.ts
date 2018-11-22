import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.less']
})
export class TransactionFormComponent implements OnInit {

  teams = TEAMS;
  transaction: Transaction = new Transaction();

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  addTransaction() {
      var transaction = new Transaction();
      transaction.date = "November 13, 2018";
      transaction.team1 = this.transaction.team1;
      transaction.team2 = this.transaction.team2;
      transaction.ratio = this.transaction.ratio;
      transaction.units = this.transaction.units;
      transaction.spread = this.transaction.spread;
      transaction.outcome = this.transaction.outcome;
      transaction.result = 5;
      this.transactionService.transactions.push(transaction);
  }

    @ViewChild('userForm') userForm: ElementRef;
    logForm() {
        console.log(this.userForm);
    }
}
