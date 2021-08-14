import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';


import { addItem } from '../../redux/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    addToList: (item) => dispatch(addItem(item))
})


function PlaceWeather(props) {

    var darkMode = false;


    if (props.location !== undefined && props.temp !== undefined && props.nextdaystemp !== undefined) {

        var currentUnit = "c";
        // console.log(props.nextdaystemp.DailyForecasts)
        const days = props.nextdaystemp.DailyForecasts.map(day => {
            var dt = new Date(day.Date);
            console.log(day)
            return (
                <td key={day.EpochDate} style={{ textAlign: 'center', border: '1px solid' }}>
                    {/* <span> */}
                    <h4>{dt.toString().split(' ')[0]}</h4>
                    <h5>
                        {Number((day.Temperature.Maximum.Value + day.Temperature.Minimum.Value) / 2).toFixed(1)} </h5>
                    {/* </span> */}
                </td>
            )
        }
        );

        const addToFavorites = () => {
            // console.log(props.location.Key)
            props.addToList([props.location.Key])
        }

        //
        return (

            <div>
                <table style={{ width: '600px', border: '1px solid' }}>
                    <thead>
                        <tr>
                            <th colSpan='5' >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ width: '30%' }}>
                                        <h4>{props.location.LocalizedName}</h4>

                                        <h5>{currentUnit === "c" ? props.temp.Temperature.Metric.Value : props.temp.Temperature.Imperial.Value} </h5>
                                    </span>
                                    <span style={{ width: '30%', alignSelf: 'center' }}>
                                        <IconButton color="secondary" onClick={() => { addToFavorites() }}  >
                                            <FavoriteIcon style={{ width: '2.3rem', height: '2.3rem' }} />
                                        </IconButton>
                                    </span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td colSpan='5' style={{ textAlign: 'center' }}>
                                <h1 style={{ marginBottom: '20px', marginTop: '0px' }}>{props.temp.WeatherText}</h1>

                            </td>
                        </tr>
                        <tr>
                            {days}
                        </tr>
                    </tbody>
                </table>

            </div>
        );


    }
    else {
        return null

    }
}

export default connect(
    null,
    mapDispatchToProps
)(PlaceWeather);
