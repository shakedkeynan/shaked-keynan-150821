import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentCondition } from '../../Featches';
import { Div, DivElement } from './favoritesElements';
import { useHistory } from 'react-router-dom'
import { setLocation } from '../../redux/actions';






function Favorites(props) {
    const dispatch = useDispatch();
    const ChangeLocation = item => dispatch(setLocation(item));

    const items = useSelector(state => state.list.items || []);


    const history = useHistory();
    const isOn = useSelector(state => state.isOn);
    const [dataList, setDataList] = useState(() => [])
    const isfahrenheit = useSelector(state => state.isFahrenheit);

    const moveTo = (name) => {
        ChangeLocation(name)
        return history.push('/');
    }

    const setTheDataList = async () => {
        const results = await Promise.all(
            items.map((item) =>
                fetchCurrentCondition(item.key)
            )
        );

        setDataList(
            results.map(res => res[0])
        );
    }

    useEffect(() => {
        if (items.length > 0) {
            setTheDataList();
        }
    }, [items]);

    if (items.length > 0) {
        var showItems = dataList.map((item, index) => {
            return (
                <DivElement key={index} onClick={() => { moveTo(items[index].name) }}>
                    <h2>{items[index].name}</h2>
                    <br />
                    <h3>{!isfahrenheit ? item.Temperature.Metric.Value : item.Temperature.Imperial.Value}</h3>
                    <br />
                    <h3>{item.WeatherText}</h3>
                </DivElement>
            )
        })
        return (
            <div>
                <br /><br />
                <Div DarkMode={isOn}>
                    {showItems}
                </Div>
            </div>
        );
    }
    else {
        return (
            <h2 style={isOn ? { color: 'white', textAlign: 'center' } :
                { textAlign: 'center' }
            }> There are no favorites to display yet</h2 >
        )
    }
}

export default Favorites;


