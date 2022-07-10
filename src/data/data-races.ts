import { F1 } from "./data-source";

export class RacesData extends F1{
    
    constructor(){
        super()    
    }

    async getRacesByYear(year: string) {

        const currentYear = new Date().getFullYear();
        
        if(isNaN(+year) || +year < 1950 || +year > currentYear) { // isNaN(+year) convierte el valor a numero y compara con isNan si el valor
            // no es numérico
            year = currentYear.toString();
           // return Promise.reject("EL año introducido no es válido");
        }

        return await (await this.get(`${year}.json`,{
            cacheOptions: { ttl:60 } // cachear la consulra durante 60 minutos
        }));
    }
}