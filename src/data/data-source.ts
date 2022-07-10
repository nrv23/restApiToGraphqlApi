import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

export class F1 extends RESTDataSource{

    httpCache!: HTTPCache; // agregar la exclamacion en la variable para indicar que es necesaria
    
    constructor(){
        super()
        this.baseURL = "https://ergast.com/api/f1/"
        this.httpCache = new HTTPCache();
    }
}