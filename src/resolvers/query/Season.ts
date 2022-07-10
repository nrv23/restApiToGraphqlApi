import { SeasonsResponse } from '../../interface/SeasonsResponse';
import { IResolvers } from '@graphql-tools/utils';
import data from '../../helper/data'

const seasonQueryResolvers : IResolvers  = {
    Query : {
      seasonsList: async (_ : void, __: unknown) => {

        try {
            const { 
                MRData: { SeasonTable: { 
                    Seasons 
                }} 
            } = (await data().seasons.getSeasons()) as SeasonsResponse;
           
        
            return Seasons;
        
        } catch (error) {
            console.log({error})
        }
      }
    }
}


export default seasonQueryResolvers;

// No dejar archivos de definiciones type root como query mutation o suscription vacios o con solos la definicion básica porque da error