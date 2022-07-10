import  { dataSources } from '../data';

const source = dataSources;

export default () => ({
    seasons: new source.SeasonsData(),
    races: new source.RacesData()
})