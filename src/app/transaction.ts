import { Team } from "./team";

export class Transaction {
    date: string;
    team1: Team;
    team2: Team;
    amount: number;
    units: number;
    spread: number;
    outcome: string;
    result: number;
}