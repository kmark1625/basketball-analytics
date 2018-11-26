import { Transaction } from './transaction';
import { TEAMS } from './mock-teams';

export const TRANSACTIONS: Transaction[] = [
    { 
        date: new Date("November 24, 2018"), 
        team1: TEAMS[26], 
        team2: TEAMS[16],
        ratio: -110,
        units: 10,
        spread: 9.5,
        outcome: "win",
        result: 10
    },
    {
        date: new Date("November 15, 2018"),
        team1: TEAMS[25],
        team2: TEAMS[9],
        ratio: -110,
        units: 10,
        spread: 6,
        outcome: "win",
        result: 10
    }
];