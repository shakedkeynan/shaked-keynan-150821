import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { fetch5DaysofDailyForecasts, fetchAutocompleteSearch, fetchCurrentCondition } from '../../Featches';
import PlaceWeather from '../PlaceWeather';
import { Div } from './mainElements';



function Main(props) {

    const [chosenLocation, SetChosenLocation] = useState()
    const [chosenLocationTemp, SetChosenLocationTemp] = useState()
    const [chosenLocation5DaysTemp, SetChosenLocation5DaysTemp] = useState()


    var darkMode = false;

    useEffect(() => {
        HasSetPlace(props.first)
    },
        [])
    async function HasSetPlace(e) {

        fetchAutocompleteSearch(e).then((x) => {
            SetChosenLocation(x[0])
            fetchCurrentCondition(x[0].Key).then((y) => {
                SetChosenLocationTemp(y[0])
                fetch5DaysofDailyForecasts(x[0].Key, true).then((z) => {
                    SetChosenLocation5DaysTemp(z)
                })
            })
        })
    }

    return (
        <Div DarkMode={darkMode}>
            <TextField
                id="standard-search-a-location-input"
                label="Search a location"
                type="Search a location"
                autoComplete="current-search-a-location"
                style={{ maxWidth: '500px', backgroundColor: 'white' }}
                onChange={(e) => { HasSetPlace(e.target.value) }}

            />
            <br /><br />
            <PlaceWeather
                location={chosenLocation}
                temp={chosenLocationTemp}
                nextdaystemp={chosenLocation5DaysTemp}
            />
        </Div>
    );
}

export default Main;
