import { F1 } from "./data-source";

export class CircuitsData extends F1{
    
    constructor(){
        super()    
    }

    async getCircuits(limit: number, page: number = 1) {
        if (isNaN(limit) || limit > 1000 || limit < 1) {
            limit = 1;
        }

        const offset = (page - 1) * limit; // en cual numero de registro empieza
        const limitPage = limit; // niumero de registros mostrados

        return await await this.get(
            `circuits.json?limit=${limitPage}&offset=${offset}`,
            {
                cacheOptions: { ttl: 60 }, // cachear la consulra durante 60 minutos
            }
        );
    }

    async getCircuitById(id: string) {

        //http://ergast.com/api/f1/circuits/monza.json

        return await await this.get(
            `circuits/${id}.json`,
            {
                cacheOptions: { ttl: 60 }, // cachear la consulra durante 60 minutos
            }
        );
    }
}