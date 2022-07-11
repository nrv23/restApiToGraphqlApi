
import { Constructor } from "./Constructor";
import { Driver } from "./ResponseDriver";


export interface DriverStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
}

export interface StandingsList {
    season: string;
    round: string;
    DriverStandings: DriverStanding[];
}

export interface StandingsTable {
    season: string;
    round?: string;
    StandingsLists: StandingsList[];
}

export interface ResponseStanding {

    MRData: {

        xmlns: string;
        series: string;
        url: string;
        limit: string;
        offset: string;
        total: string;
        StandingsTable: StandingsTable;
    }
}