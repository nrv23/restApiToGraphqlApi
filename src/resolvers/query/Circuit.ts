import { ResponseCircuit } from "./../../interface/ResponseCircuit";

import { IResolvers } from "@graphql-tools/utils";
import data from "../../helper/data";

const queryCircuitsResolvers: IResolvers = {
    Query: {
        getCircuits: async (_: void, args: { limit: number; page: number }) => {
            try {
                const {
                    MRData: {
                        CircuitTable: { Circuits },
                    },
                } = (await data().circuits.getCircuits(
                    args.limit,
                    args.page
                )) as ResponseCircuit;

                return Circuits;
            } catch (error) {
                console.log({ error });
            }
        },

        circuitSelected: async (_: void, args: { id: string }) => { 

            try {

                const  {
                    MRData: {
                        CircuitTable: { Circuits },
                    },
                } = (await data().circuits.getCircuitById(args.id)) as ResponseCircuit
                ;

                return Circuits.length === 0 ? null : Circuits[0];

            } catch (error) {
                console.log({ error });
            }
        }
    },
};

export default queryCircuitsResolvers;
