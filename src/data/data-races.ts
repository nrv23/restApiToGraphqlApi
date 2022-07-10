import { checkRound, checkYear } from "../lib/utils";
import { F1 } from "./data-source";

export class RacesData extends F1{
    
    constructor(){
        super()    
    }

    async getRacesByYear(year: string) {

        year = checkYear(year);
        
        return await (await this.get(`${year}.json`,{
            cacheOptions: { ttl:60 } // cachear la consulra durante 60 minutos
        }));
    }

    async getRaceByYearAndRound(year: string, round: number) {
         
        year = checkYear(year);
        round = checkRound(round);

        return await (await this.get(`${year}/${round}.json`,{
            cacheOptions: { ttl:60 } // cachear la consulra durante 60 minutos
        }));
    }
}