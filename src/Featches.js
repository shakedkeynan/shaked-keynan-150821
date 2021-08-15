const ProvidedKey = "PPnGsGhA3ETXd07a3gLfDkDay7RJPumj";


export async function fetchAutocompleteSearch(location) {

    let example = [
        {
            "Version": 1, "Key": "215854", "Type": "City", "Rank": 31, "LocalizedName": "Tel Aviv", "Country": { "ID": "IL", "LocalizedName": "Israel" },
            "AdministrativeArea": { "ID": "TA", "LocalizedName": "Tel Aviv" }
        },
        { "Version": 1, "Key": "3431644", "Type": "City", "Rank": 45, "LocalizedName": "Telanaipura", "Country": { "ID": "ID", "LocalizedName": "Indonesia" }, "AdministrativeArea": { "ID": "JA", "LocalizedName": "Jambi" } },
        { "Version": 1, "Key": "300558", "Type": "City", "Rank": 45, "LocalizedName": "Telok Blangah New Town", "Country": { "ID": "SG", "LocalizedName": "Singapore" }, "AdministrativeArea": { "ID": "05", "LocalizedName": "South West" } },
        { "Version": 1, "Key": "325876", "Type": "City", "Rank": 51, "LocalizedName": "Telford", "Country": { "ID": "GB", "LocalizedName": "United Kingdom" }, "AdministrativeArea": { "ID": "TFW", "LocalizedName": "Telford and Wrekin" } }, { "Version": 1, "Key": "169072", "Type": "City", "Rank": 51, "LocalizedName": "Telavi", "Country": { "ID": "GE", "LocalizedName": "Georgia" }, "AdministrativeArea": { "ID": "KA", "LocalizedName": "Kakheti" } },
        { "Version": 1, "Key": "230611", "Type": "City", "Rank": 51, "LocalizedName": "Telsiai", "Country": { "ID": "LT", "LocalizedName": "Lithuania" }, "AdministrativeArea": { "ID": "TE", "LocalizedName": "Telšiai" } }, { "Version": 1, "Key": "2723742", "Type": "City", "Rank": 55, "LocalizedName": "Telégrafo", "Country": { "ID": "BR", "LocalizedName": "Brazil" }, "AdministrativeArea": { "ID": "PA", "LocalizedName": "Pará" } }, { "Version": 1, "Key": "186933", "Type": "City", "Rank": 55, "LocalizedName": "Tela", "Country": { "ID": "HN", "LocalizedName": "Honduras" }, "AdministrativeArea": { "ID": "AT", "LocalizedName": "Atlántida" } }, { "Version": 1, "Key": "3453754", "Type": "City", "Rank": 55, "LocalizedName": "Telaga Asih", "Country": { "ID": "ID", "LocalizedName": "Indonesia" }, "AdministrativeArea": { "ID": "JB", "LocalizedName": "West Java" } }, { "Version": 1, "Key": "3453755", "Type": "City", "Rank": 55, "LocalizedName": "Telagamurni", "Country": { "ID": "ID", "LocalizedName": "Indonesia" }, "AdministrativeArea": { "ID": "JB", "LocalizedName": "West Java" } }
    ]
    return example
    // let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${ProvidedKey}&q=${location}`)
    // return await response.json();
}
export async function fetchCurrentCondition(locationKey) {

    let example = [
        {
            "LocalObservationDateTime": "2021-08-14T12:06:00+03:00",
            "EpochTime": 1628931960, "WeatherText": "Sunny", "WeatherIcon": 1,
            "HasPrecipitation": false, "PrecipitationType": null, "IsDayTime": true,
            "Temperature": {
                "Metric": { "Value": 32.5, "Unit": "C", "UnitType": 17 },
                "Imperial": { "Value": 90.0, "Unit": "F", "UnitType": 18 }
            },
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
        }
    ]

    return await example;
    //  let response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${ProvidedKey}`)
    //  return await response.json();
}

export async function fetch5DaysofDailyForecasts(locationKey, isMetric) {

    let example = {
        "Headline":
        {
            "EffectiveDate": "2021-08-14T20:00:00+03:00",
            "EffectiveEpochDate": 1628960400,
            "Severity": 7,
            "Text": "Very warm Saturday night",
            "Category": "heat",
            "EndDate": "2021-08-15T08:00:00+03:00",
            "EndEpochDate": 1629003600,
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
        }, "DailyForecasts": [{
            "Date": "2021-08-14T07:00:00+03:00",
            "EpochDate": 1628913600,
            "Temperature": {
                "Minimum": { "Value": 28.3, "Unit": "C", "UnitType": 17 },
                "Maximum": { "Value": 32.5, "Unit": "C", "UnitType": 17 }
            },
            "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false },
            "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false },
            "Sources": ["AccuWeather"],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2021-08-15T07:00:00+03:00",
            "EpochDate": 1629000000,
            "Temperature": {
                "Minimum": { "Value": 27.9, "Unit": "C", "UnitType": 17 },
                "Maximum": { "Value": 32.2, "Unit": "C", "UnitType": 17 }
            },
            "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false },
            "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false },
            "Sources": ["AccuWeather"],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2021-08-16T07:00:00+03:00", "EpochDate": 1629086400,
            "Temperature": {
                "Minimum": { "Value": 27.1, "Unit": "C", "UnitType": 17 },
                "Maximum": { "Value": 31.8, "Unit": "C", "UnitType": 17 }
            }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
        }, { "Date": "2021-08-17T07:00:00+03:00", "EpochDate": 1629172800, "Temperature": { "Minimum": { "Value": 27.7, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 31.2, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us" }, { "Date": "2021-08-18T07:00:00+03:00", "EpochDate": 1629259200, "Temperature": { "Minimum": { "Value": 27.5, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.7, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us" }]
    }

    return await example;
    // let response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${ProvidedKey}&metric=${isMetric}`)
    // return await response.json();
}