import { Race } from './../../interface/RacesResponse';
import { Season } from '../../interface/SeasonsResponse';
import { IResolvers } from '@graphql-tools/utils';
import { getWikipediaMobileUrl } from '../../lib/utils';
import { Circuit } from '../../interface/Circuit';
import { Location } from '../../interface/Location';

const tpyeResolvers: IResolvers = {

    Season: {
        year: (parent: Season) => parent.season,
        urlMobile: (parent: Season) =>  getWikipediaMobileUrl(parent.url)
    },
    Circuit:{

        id:  (parent: Circuit) => parent.circuitId,
        location: (parent: Circuit) => parent.Location,
        name:(parent: Circuit) => parent.circuitName
    }, 
    Race: {
        circuit: (parent: Race) => parent.Circuit,
        time : (parent: Race) => {
            if(!parent.time) {

                return ""
            }

            return parent.time;
        }
    },
    Location: {
        lng: (parent : Location) => parent.long
    }
}

export default tpyeResolvers;