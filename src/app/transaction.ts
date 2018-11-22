import { Team } from "./team";

export class Transaction {

    constructor() {}

    date: Date;
    team1: Team;
    team2: Team;
    ratio: number;
    units: number;
    spread: number;
    outcome: string;
    result: number;
}