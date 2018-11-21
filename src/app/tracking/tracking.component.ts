import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { Team } from '../team';
import { User } from '../user';
import { TRANSACTIONS } from '../mock-transaction';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.less']
})
export class TrackingComponent implements OnInit {
  selectedTeam1: Team;
  selectedTeam2: Team;
  teams = TEAMS;
  transactions = TRANSACTIONS;

    user: User = {
        firstName: 'New',
        lastName: 'User',
        role: 'Guest',
        notes: undefined
    };

  @ViewChild('userForm') userForm: ElementRef;
  logForm(){
    console.log(this.userForm);
  }

  constructor() { }

  ngOnInit() {
  }

}
