const ProvidedKey = "PPnGsGhA3ETXd07a3gLfDkDay7RJPumj";


export async function fetchAutocompleteSearch(location) {
    let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${ProvidedKey}&q=${location}`)
    return await response.json();
}
export async function fetchCurrentCondition(locationKey) {
     let response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${ProvidedKey}`)
     return await response.json();
}

export async function fetch5DaysofDailyForecasts(locationKey, isMetric) {
    let response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${ProvidedKey}&metric=${isMetric}`)
    return await response.json();
}

export async function fetchGeopositionSearch(lat, lon) {
    let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${ProvidedKey}&q=${lat}%2C${lon}`)
    return await response.json();
}