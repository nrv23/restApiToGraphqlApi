export function getWikipediaMobileUrl(url: string) {

    return !url? '': url.replace('wikipedia','m.wikipedia');
}

export function checkYear(year: string ) {

    const currentYear = new Date().getFullYear();
    if(isNaN(+year) || +year < 1950 || +year > currentYear) { // isNaN(+year) convierte el valor a numero y compara con isNan si el valor
        // no es numérico
        year = currentYear.toString();
       // return Promise.reject("EL año introducido no es válido");
    }

    return year;
}

export function roundCheck(round: number) {

    if(round >= 100) {
        return 1
    } 

    return round;

}