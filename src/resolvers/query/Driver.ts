import { DriversResponse } from './../../interface/ResponseDriver';
import { IResolvers } from '@graphql-tools/utils';
import data from '../../helper/data';

const queryDriverResolvers: IResolvers = {
    Query: {
        getDrivers: async (_: void, args: { limit: number, page: number }) => {

            try {

                const {
                    MRData: {
                        DriverTable: {
                            Drivers
                        }
                    }
                } = (await data().drivers.getDrivers(args.limit, args.page)) as DriversResponse;


                return Drivers;

            } catch (error) {

                console.log({ error });
            }
        },
        getDriversByYear: async (_: void, args: { year: string }) => {

            try {

                const {
                    MRData: {
                        DriverTable: {
                            Drivers
                        }
                    }
                } = (await data().drivers.getDriversByYear(args.year)) as DriversResponse;

                return Drivers;

            } catch (error) {
                console.log({ error });
            }
        },

        getDriversByYearAndRound: async (_: void, args: { year: string, round: number }) => {

            try {

                const {
                    MRData: {
                        DriverTable: {
                            Drivers
                        }
                    }
                } = (await data().drivers.getDriversByYearAndRound(args.year, args.round)) as DriversResponse;

                return Drivers;

            } catch (error) {
                console.log({ error });
            }
        },

        getDriverById: async (_: void, args: { id: string }) => {

            try {

                const {
                    MRData: {
                        DriverTable: {
                            Drivers
                        }
                    }
                } = (await data().drivers.getDriverById(args.id)) as DriversResponse;

                return Drivers.length === 0 ? null : Drivers[0];

            } catch (error) {
                console.log({ error });
            }
        }
    }
}

export default queryDriverResolvers;