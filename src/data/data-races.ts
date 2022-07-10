import { checkYear } from "../lib/utils";
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
}