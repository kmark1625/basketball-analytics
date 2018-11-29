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
        date: new Date("November 24, 2018"),
        team1: TEAMS[25],
        team2: TEAMS[9],
        ratio: -110,
        units: 10,
        spread: 6,
        outcome: "win",
        result: 10
    },
    {
        date: new Date("November 26, 2018"),
        team1: TEAMS[1],
        team2: TEAMS[18],
        ratio: -110,
        units: 10,
        spread: 2,
        outcome: "win",
        result: 10
    },
    {
        date: new Date("November 27, 2018"),
        team1: TEAMS[27],
        team2: TEAMS[14],
        ratio: -110,
        units: 10,
        spread: -5.5,
        outcome: "win",
        result: 10
    },
    {
        date: new Date("November 28, 2018"),
        team1: TEAMS[23],
        team2: TEAMS[12],
        ratio: -110,
        units: 10,
        spread: -11.5,
        outcome: "loss",
        result: -11
    }
];