import { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchCurrentCondition } from '../../Featches';
import { Div, DivElement } from './favoritesElements';
import { useHistory } from 'react-router-dom'
import { setLocation } from '../../redux/actions';


const mapStateToProps = (state) => {
    return { ...state, items: state.list.items || [] }
}
const mapDispatchToProps = (dispatch) => ({
    setLocation: (item) => dispatch(setLocation(item))
})

function Favorites(props) {
    console.log(props)
    const history = useHistory();
    const isOn = useSelector(state => state.isOn);
    const [dataList, setDataList] = useState(() => [])

    const moveTo = (destination, name) => {
        props.setLocation(name)
        return history.push('/');
    }

    const setTheDataList = async () => {
        const results = await Promise.all(
            props.items.map((item, index) =>
                fetchCurrentCondition(item.key)
            )
        );

        setDataList(
            results.map(res => res[0])
        );
    }

    useEffect(() => {
        if (props.items.length > 0) {
            setTheDataList();
        }
    }, [props.items]);

    if (props.items.length > 0) {
        var currentUnit = "c";

        console.log(dataList)
        var showItems = dataList.map((item, index) => {
            console.log(props.items)
            return (
                <DivElement key={index} onClick={() => { moveTo(item, props.items[index].name) }}>
                    <h2>{props.items[index].name}</h2>
                    <br />
                    <h3>{currentUnit === "c" ? item.Temperature.Metric.Value : item.Temperature.Imperial.Value}</h3>
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
                    {/* <DivElement>
                        <h2>haifa</h2>
                        <br />
                        <h3>22</h3>
                        <br />
                        <h3>cloudy</h3>
                    </DivElement>
                    <DivElement>
                        <h2>haifa</h2>
                        <br />
                        <h3>23</h3>
                        <br />
                        <h3>cloudy</h3>
                    </DivElement> */}
                    {/* <DivElement>
                        <h2>haifa</h2>
                        <br />
                        <h3>24</h3>
                        <br />
                        <h3>cloudy</h3>
                    </DivElement>
                    <DivElement>
                        <h2>haifa</h2>
                        <br />
                        <h3>25</h3>
                        <br />
                        <h3>cloudy</h3>
                    </DivElement>
                    <DivElement>
                        <h2>haifa</h2>
                        <br />
                        <h3>26</h3>
                        <br />
                        <h3>cloudy</h3>
                    </DivElement>
                    <DivElement>
                        <h2>haifa</h2>
                        <br />
                        <h3>27</h3>
                        <br />
                        <h3>cloudy</h3>
                    </DivElement> */}
                </Div>
            </div>
        );
    }
    else {
        return (
            <h2 style={isOn ? { color: 'white', textAlign: 'center' } : {
                textAlign: 'center'
            }
            }> There are no favorites to display yet</h2 >
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);


