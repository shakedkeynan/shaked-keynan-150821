import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { fetch5DaysofDailyForecasts, fetchAutocompleteSearch, fetchCurrentCondition } from '../../Featches';
import PlaceWeather from '../PlaceWeather';
import { Div } from './mainElements';
import { connect, useSelector } from 'react-redux';

const mapStateToProps = (state) => {
    return state;
}

function Main(props) {

    const [chosenLocation, SetChosenLocation] = useState()
    const [chosenLocationTemp, SetChosenLocationTemp] = useState()
    const [chosenLocation5DaysTemp, SetChosenLocation5DaysTemp] = useState()

    const isOn = useSelector(state => state.isOn);
    console.log(isOn)

    useEffect(() => {

        HasSetPlace(props.location)
    },
        [])
    async function HasSetPlace(e) {

        if (e === null || e === "") {

            e = props.location
            if (e === null || e === "" || e === undefined) {
                e = 'tel aviv'
            }
        }
        else {
            //to contain " " and show to user
            if (/[^a-zA-Z]/.test(e)) {
                console.log("should contain just english")
            }
        }


        try {
            fetchAutocompleteSearch(e).then((x) => {
                SetChosenLocation(x[0])
                fetchCurrentCondition(x[0].Key).then((y) => {
                    SetChosenLocationTemp(y[0])
                    fetch5DaysofDailyForecasts(x[0].Key, true).then((z) => {
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
                type="Search a location"
                autoComplete="current-search-a-location"
                style={isOn ? { filter: 'invert(1)', maxWidth: '500px', backgroundColor: 'white' } : { maxWidth: '500px', backgroundColor: 'white' }}
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


export default connect(
    mapStateToProps,
    null
)(Main);

