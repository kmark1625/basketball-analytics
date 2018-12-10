import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = [
    [1, 100],
    [2, 200],
    [3, 300],
    [4, 400]
  ];

  columnNames = ['Date', 'Total']

  title = "Results"
  type = "LineChart"
}
