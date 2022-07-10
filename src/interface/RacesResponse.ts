import { Circuit } from "./Circuit";

export interface RacesResponse {
    MRData: {
        xmlns: string;
        series: string;
        url: string;
        limit: number | string;
        offset: number | string;
        total: number | string;
        RaceTable : {
            season: string;
            Races: Race[]
        }
    }
}

export interface Race {

    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit[],
    date: string;
    time?: string;
}

