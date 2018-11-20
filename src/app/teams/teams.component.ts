import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TEAMS } from '../mock-teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less']
})
export class TeamsComponent implements OnInit {

//   team: Team = {
//       id: 1,
//       name: "Cleveland Cavaliers"
//   };

  beams = TEAMS;

  constructor() { }

  ngOnInit() {
  }
}
