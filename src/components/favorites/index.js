import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentCondition } from '../../Featches';
import { Div, DivElement } from './favoritesElements';
import { Redirect, useHistory } from 'react-router-dom'
import { useEffect } from 'react';
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

    const [dataList, setDataList] = useState(() => [1, 2, 3])

    const moveTo = (destination) => {
        props.setLocation(destination)
        return history.push('/');
    }

    const setTheDataList = async () => {
        const results = await Promise.all(
            props.items.map((item, index) =>
                fetchCurrentCondition(item[0])
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

        var showItems = dataList.map((item) => {
            console.log(item)
            return (
                <DivElement onClick={() => { moveTo(item) }}>
                    <h2>haifa</h2>
                    <br />
                    <h3>27</h3>
                    <br />
                    <h3>cloudy</h3>
                </DivElement>
            )
        })
        return (
            <div>
                <br /><br />
                <Div>
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
            <h2 style={{ textAlign: 'center' }}>There are no favorites to display yet</h2>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);


