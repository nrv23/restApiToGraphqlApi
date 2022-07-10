export function getWikipediaMobileUrl(url: string) {

    return !url? '': url.replace('wikipedia','m.wikipedia');
}