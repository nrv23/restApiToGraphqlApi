import { RacesResponse } from './../../interface/RacesResponse';

import { IResolvers } from '@graphql-tools/utils';
import data from '../../helper/data'

const raceQueryResolvers : IResolvers  = {
    Query : {
        recesByYear: async (_ : void, args: { year: string }) => {

        try {

            const { MRData: {
                RaceTable: {
                    Races
                }
            } } = (await data().races.getRacesByYear(args.year)) as RacesResponse;

            return Races;
                        
        } catch (error) {
            console.log({error})
        }
      },
      raceSelected: async (_ : void, args: { year: string, round: number }) => {

        try {

            const { MRData: {
                RaceTable: {
                    Races
                }
            } } = (await data().races.getRaceByYearAndRound(args.year,args.round)) as RacesResponse;
            
            return Races[0];
            
        } catch (error) {
            console.log({error})
        }
      }
    }
}

export default raceQueryResolvers;

// No dejar archivos de definiciones type root como query mutation o suscription vacios o con solos la definicion básica porque da error