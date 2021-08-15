import Button from '@material-ui/core/Button';
import { Div } from './MyRouterElements'
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Main from '../main/index';
import Favorites from '../favorites';
import { useDispatch, useSelector } from 'react-redux';
import { setdarkmode, setisfahrenheit } from '../../redux/actions';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import { RiFahrenheitFill, RiCelsiusFill } from 'react-icons/ri';

function MyRouter() {
    const dispatch = useDispatch();
    const ChangeDarkMode = isOn => dispatch(setdarkmode(isOn));
    const isOn = useSelector(state => state.isOn);
    const Changeisfahrenheit = isFahrenheit => dispatch(setisfahrenheit(isFahrenheit));
    const isfahrenheit = useSelector(state => state.isFahrenheit);

    return (
        <div >
            <Router>
                <Div>
                    <Link to="/">
                        <Button variant="outlined"
                            style={{ border: 'splid 1px ' }}
                            style={isOn ? { filter: 'invert(1)', border: 'splid 1px ' } :
                                { border: 'splid 1px ' }}>
                            main
                        </Button>
                    </Link>
                    <Link to="/favorites">
                        <Button variant="outlined" style={isOn ? { filter: 'invert(1)', border: 'splid 1px ' } :
                            { border: 'splid 1px ' }}>
                            favorites
                        </Button>
                    </Link>

                </Div>
                <Switch>
                    <Route exact path="/">
                        <Main isOn={isOn} />
                        ‫‫​‫​‫​‫​‫​‫​‫​‫​‫​‫​‫‫​‫​‫‫​‫​‫‫​‫​‫‫​‫​‫‫​‫​‫‫​‫‫‫‫​‫​‫‫​‫​‫​‫​‫‫​‫​‫​‫‫​‫‫‫​‫​‫​‫‫​‫​‫‫‫​‫​‫​‫‫​‫​‫‫‫​‫‫​‫‫​‫‫​‫​‫​‫​‫‫‫​‫‫‫​‫​‫‫​‫​‫‫​‫​‫‫​‫​‫​‫​‫‫​‫‫‫​‫‫‫​‫‫​‫‫​‫‫​‫​‫​‫‫​‫‫​‫​‫​‫​‫‫‫​‫‫‫​‫‫‫​‫​‫‫​‫​‫​‫‫‫​‫​‫​‫‫‫​‫​‫​‫‫​‫‫‫‫​‫​‫‫​‫​‫​‫​‫​‫‫​‫‫​‫‫​‫​‫‫​‫‫​‫‫​‫​‫​‫​‫​‫​‫‫‫‫​‫​‫‫‫‫‫​‫​‫‫‫​‫‫​‫​‫​‫‫​‫‫‫‫​‫‫‫​‫​‫​‫‫​‫‫​‫​‫‫​‫​‫​‫​‫‫‫​‫‫​‫‫​‫‫‫​‫​‫​‫‫​‫‫​‫‫‫​‫‫​‫‫​‫‫​‫‫‫​‫‫‫‫​‫​‫‫​‫​‫‫​‫​‫​‫​‫​‫‫​‫​‫‫‫‫​‫‫‫​‫​‫​‫​‫​‫‫‫‫​‫​‫‫‫‫
                    </Route>
                    <Route path="/favorites">
                        <Favorites isOn={isOn} />
                    </Route>

                </Switch>
            </Router >
            <div style={{ textAlign: 'center' }}>
                <SettingsBrightnessIcon
                    style={isOn ? { color: 'white', width: '10%', height: '10%' } :
                        { width: '10%', height: '10%' }}
                    onClick={() => { ChangeDarkMode(!isOn) }}></SettingsBrightnessIcon>
                <span style={{ marginLeft: '15%' }} />
                {isfahrenheit ?
                    <RiFahrenheitFill onClick={() => Changeisfahrenheit(!isfahrenheit)}
                        style={isOn ? { color: 'white', width: '10%', height: '10%' } :
                            { width: '10%', height: '10%' }} />
                    :
                    <RiCelsiusFill onClick={() => Changeisfahrenheit(!isfahrenheit)}
                        style={isOn ? { color: 'white', width: '10%', height: '10%' } :
                            { width: '10%', height: '10%' }}
                    />}

              


            </div>
        </div>
    );
}

export default MyRouter;
