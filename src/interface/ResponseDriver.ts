
export interface DriversResponse {
    MRData: {
        xmlns: string;
        series: string;
        url: string;
        limit: number | string;
        offset: number | string;
        total: number | string;
        DriverTable: {
            season: string;
            round?: string;
            Drivers: Driver[];
        }
    }
}

export interface Driver {
    driverId: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
    code?: string;
    permanentNumber?: string;
}
