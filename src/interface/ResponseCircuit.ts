import { Circuit } from './Circuit';
export interface ResponseCircuit {

  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    CircuitTable: { circuitId?: string, Circuits: Circuit[] }
  }

}