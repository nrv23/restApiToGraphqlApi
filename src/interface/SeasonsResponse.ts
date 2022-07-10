export interface SeasonsResponse {
    MRData: {
        xmlns: string
        series: string,
        url: string,
        limit: number | string,
        offset: number | string,
        total: number | string,
        SeasonTable: { Seasons: Season[] }
    }
}

export interface Season {
    season: string;
    url: string;
    urlMobile: string;
}

