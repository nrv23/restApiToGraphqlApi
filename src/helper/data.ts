import  { dataSources } from '../data';

const source = dataSources;

export default () => ({
    seasons: new source.SeasonsData(),
    races: new source.RacesData(),
    drivers: new source.DriversData(),
    circuits: new source.CircuitsData()
})