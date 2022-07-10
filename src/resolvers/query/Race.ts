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
      }
    }
}

export default raceQueryResolvers;

// No dejar archivos de definiciones type root como query mutation o suscription vacios o con solos la definicion básica porque da error