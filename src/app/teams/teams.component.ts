import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../mock-teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less']
})
export class TeamsComponent implements OnInit {

  teams = TEAMS;

  constructor() { }

  ngOnInit() {
  }
}
