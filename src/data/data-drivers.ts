import { checkRound, checkYear } from "../lib/utils";
import { F1 } from "./data-source";

export class DriversData extends F1 {
    constructor() {
        super();
    }

    async getDrivers(limit: number, page: number = 1) {
        if (isNaN(limit) || limit > 1000 || limit < 1) {
            limit = 1;
        }

        const offset = (page - 1) * limit; // en cual numero de registro empieza
        const limitPage = limit; // niumero de registros mostrados

        return await await this.get(
            `drivers.json?limit=${limitPage}&offset=${offset}`,
            {
                cacheOptions: { ttl: 60 }, // cachear la consulra durante 60 minutos
            }
        );
    }

    async getDriversByYear(year: string) {
        year = checkYear(year);

        return await await this.get(`/${year}/drivers.json`, {
            cacheOptions: { ttl: 60 }, // cachear la consulra durante 60 minutos
        });
    }

    async getDriversByYearAndRound(year: string, round: number) {
        year = checkYear(year);
        round = checkRound(round);

        return await await this.get(`/${year}/${round}/drivers.json`, {
            cacheOptions: { ttl: 60 }, // cachear la consulra durante 60 minutos
        });
    }
    async getDriverById(name: string) {

        return this.get(`drivers/${name}.json`, {
            cacheOptions: { ttl: 60 }, // cachear la consulra durante 60 minutos
        });
    }

    async getDriverStandings(year: string) {

        //https://ergast.com/api/f1/2008/5/constructorStandings.json

        year = checkYear(year);

        return await await this.get(`/${year}/driverStandings.json`, {
            cacheOptions: { ttl: 60 }, // cachear la consulra durante 60 minutos
        });

    }
}
