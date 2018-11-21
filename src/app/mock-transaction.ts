import { Transaction } from './transaction';
import { TEAMS } from './mock-teams';

export const TRANSACTIONS: Transaction[] = [
    { 
        date: "November 13, 2018", 
        team1: TEAMS[13], 
        team2: TEAMS[1],
        amount: -110,
        units: 5,
        spread: -3.5,
        outcome: "win",
        result: 500
    },
    {
        date: "November 15, 2018",
        team1: TEAMS[22],
        team2: TEAMS[7],
        amount: -110,
        units: 3,
        spread: 1.5,
        outcome: "loss",
        result: -330
    }
];