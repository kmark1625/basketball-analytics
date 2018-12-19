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
    },
    {
        date: new Date("November 29, 2018"),
        team1: TEAMS[9],
        team2: TEAMS[27],
        ratio: -115,
        units: 10,
        spread: 9,
        outcome: "win",
        result: 10
    },
    {
        date: new Date("November 30, 2018"),
        team1: TEAMS[26],
        team2: TEAMS[10],
        ratio: -110,
        units: 10,
        spread: 1,
        outcome: "loss",
        result: -11
    },
    {
        date: new Date("November 30, 2018"),
        team1: TEAMS[26],
        team2: TEAMS[10],
        ratio: -105,
        units: 10,
        spread: 2,
        outcome: "loss",
        result: -10.5
    },
    {
        date: new Date("December 5, 2018"),
        team1: TEAMS[22],
        team2: TEAMS[27],
        ratio: -110,
        units: 10,
        spread: 6.5,
        outcome: "loss",
        result: -11
    },
    {
        date: new Date("December 7, 2018"),
        team1: TEAMS[9],
        team2: TEAMS[16],
        ratio: -110,
        units: 10,
        spread: 1.5,
        outcome: "win",
        result: 10
    },
    {
        date: new Date("December 12, 2018"),
        team1: TEAMS[16],
        team2: TEAMS[11],
        ratio: -110,
        units: 10,
        spread: -.5,
        outcome: "loss",
        result: -11
    },
    {
        date: new Date("December 12, 2018"),
        team1: TEAMS[9],
        team2: TEAMS[27],
        ratio: -110,
        units: 30,
        spread: -7,
        outcome: "loss",
        result: -33
    },
    {
        date: new Date("December 13, 2018"),
        team1: TEAMS[10],
        team2: TEAMS[13],
        ratio: -110,
        units: 50,
        spread: -5.5,
        outcome: "win",
        result: 50
    },
    {
        date: new Date("December 14, 2018"),
        team1: TEAMS[27],
        team2: TEAMS[24],
        ratio: -110,
        units: 15,
        spread: -2,
        outcome: "loss",
        result: -16.5
    }
];