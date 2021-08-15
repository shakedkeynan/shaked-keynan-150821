import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import { addItem, removeItem } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

function PlaceWeather(props) {

    const dispatch = useDispatch();
    const addToList = item => dispatch(addItem(item));
    const remomeFromList = item => dispatch(removeItem(item));
    const items = useSelector(state => state.list.items);
    const isfahrenheit = useSelector(state => state.isFahrenheit);
    const isOnFavorite = items && props.location && items.some(item => item.key === props.location.Key);



    if (props.location !== undefined && props.temp !== undefined && props.nextdaystemp !== undefined) {

        const days = props.nextdaystemp.DailyForecasts.map(day => {
            var dt = new Date(day.Date);
            return (
                <td key={day.EpochDate} style={{ textAlign: 'center', border: '1px solid' }}>
                    <h4>{dt.toString().split(' ')[0]}</h4>
                    <h5>
                        {Number((day.Temperature.Maximum.Value + day.Temperature.Minimum.Value) / 2).toFixed(1)} </h5>
                </td>
            )
        }
        );

        const toggleFavorites = () => {
            if (isOnFavorite) {
                remomeFromList({ 'key': props.location.Key, 'name': props.location.LocalizedName })
            }
            else {
                addToList({ 'key': props.location.Key, 'name': props.location.LocalizedName })
            }
        }

        return (

            <div>
                <table style={{ width: '600px', border: '1px solid' }}>
                    <thead>
                        <tr>
                            <th colSpan='5' >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ width: '30%' }}>
                                        <h4>{props.location.LocalizedName}</h4>

                                        <h5>{!isfahrenheit ? props.temp.Temperature.Metric.Value : props.temp.Temperature.Imperial.Value} </h5>
                                    </span>
                                    <span style={{ width: '30%', alignSelf: 'center' }}>
                                        <IconButton color="secondary" onClick={() => { toggleFavorites() }}  >
                                            {isOnFavorite ? <FavoriteIcon style={{ width: '2.3rem', height: '2.3rem' }} /> : <FavoriteBorderIcon style={{ width: '2.3rem', height: '2.3rem' }} />}
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

export default PlaceWeather;
