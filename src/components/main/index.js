import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { fetch5DaysofDailyForecasts, fetchAutocompleteSearch, fetchCurrentCondition } from '../../Featches';
import PlaceWeather from '../PlaceWeather';
import { Div } from './mainElements';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGeopositionSearch } from '../../Featches';
import { BiCurrentLocation } from 'react-icons/bi';
import { setLocation } from '../../redux/actions';

function Main() {

    const [chosenLocation, SetChosenLocation] = useState()
    const [chosenLocationTemp, SetChosenLocationTemp] = useState()
    const [chosenLocation5DaysTemp, SetChosenLocation5DaysTemp] = useState()
    const [errorMsg, SetErrorMsg] = useState(false)

    const dispatch = useDispatch();
    const isfahrenheit = useSelector(state => state.isFahrenheit);
    const isOn = useSelector(state => state.isOn);
    const location = useSelector(state => state.location);
    const ChangeLocation = item => dispatch(setLocation(item));

    useEffect(() => { HasSetPlace(location) }, [])
    useEffect(() => {
        HasSetPlace(location)
    }, [isfahrenheit])


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {
        fetchGeopositionSearch(position.coords.latitude,
            position.coords.longitude).then((item) => {
                ChangeLocation(item.LocalizedName);
                HasSetPlace(item.LocalizedName)
            })
    }


    async function HasSetPlace(e) {
        SetErrorMsg(false);
        if (e === null || e === "") {

            e = location
            if (e === null || e === "" || e === undefined) {
                e = 'tel aviv'
            }
        }
        else {
            if (e.indexOf(' ') >= 0) {
                e.split(' ').forEach(word => {
                    if (/[^a-zA-Z]/.test(word)) {
                        SetErrorMsg("Need to contain letters only")
                    }
                });
            }
            else if (/[^a-zA-Z]/.test(e)) {
                SetErrorMsg("Need to contain letters only");
            }
        }


        try {
            fetchAutocompleteSearch(e).then((x) => {
                ChangeLocation( x[0].LocalizedName)
                SetChosenLocation(x[0])
                fetchCurrentCondition(x[0].Key).then((y) => {
                    SetChosenLocationTemp(y[0])
                    fetch5DaysofDailyForecasts(x[0].Key, !isfahrenheit).then((z) => {
                        SetChosenLocation5DaysTemp(z)
                    })
                })
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Div DarkMode={isOn}>
            <TextField
                id="standard-search-a-location-input"
                label="Search a location"
                helperText={errorMsg}
                type="Search a location"
                autoComplete="current-search-a-location"
                style={isOn ? { filter: 'invert(1)', maxWidth: '500px', backgroundColor: 'white' } :
                    { color: 'red', maxWidth: '500px', backgroundColor: 'white' }}
                onChange={(e) => { HasSetPlace(e.target.value) }}
            />
            <BiCurrentLocation
                onClick={() => getLocation()}
                style={isOn ? { marginTop: '1%', color: 'white', width: '5%', height: '5%' } :
                    { marginTop: '1%', width: '5%', height: '5%' }} />
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

