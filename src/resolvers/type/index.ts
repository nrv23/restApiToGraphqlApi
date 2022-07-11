import { Race } from './../../interface/RacesResponse';
import { Season } from '../../interface/SeasonsResponse';
import { IResolvers } from '@graphql-tools/utils';
import { getWikipediaMobileUrl } from '../../lib/utils';
import { Circuit } from '../../interface/Circuit';
import { Location } from '../../interface/Location';
import { Driver } from '../../interface/ResponseDriver';
import { Constructor } from '../../interface/Constructor';

const tpyeResolvers: IResolvers = {

    Season: {
        year: (parent: Season) => parent.season,
        urlMobile: (parent: Season) =>  getWikipediaMobileUrl(parent.url)
    },
    Circuit:{

        id:  (parent: Circuit) => parent.circuitId,
        location: (parent: Circuit) => parent.Location,
        name:(parent: Circuit) => parent.circuitName,
        urlMobile: (parent: Circuit) =>  getWikipediaMobileUrl(parent.url)
    }, 
    Race: {
        circuit: (parent: Race) => parent.Circuit,
        time : (parent: Race) => {
            if(!parent.time) {

                return ""
            }

            return parent.time;
        },
        urlMobile: (parent: Race) =>  getWikipediaMobileUrl(parent.url)
    },
    Location: {
        lng: (parent : Location) => parent.long
    },
    Driver: {
        id: (parent: Driver) => parent.driverId,
        name: (parent: Driver) => ''.concat(parent.givenName,' ',parent.familyName),
        urlMobile: (parent: Driver) => getWikipediaMobileUrl(parent.url),
        code: (parent: Driver) => !parent.code ? '' : parent.code,
        permanentNumber: (parent: Driver) => !parent.permanentNumber ? '' : parent.permanentNumber
    },
    Constructor: {
        id: (parent: Constructor) => parent.constructorId,
        urlMobile: (parent: Constructor) =>  getWikipediaMobileUrl(parent.url)
    }
}

export default tpyeResolvers;