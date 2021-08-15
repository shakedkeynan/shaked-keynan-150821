import { combineReducers } from 'redux'

import list from './listReducers';
import location from './locationReducers';
import isOn from './darkModeReducers';
import isFahrenheit from './isFahrenheitReducers';
export default combineReducers({
    list,
    location,
    isOn, 
    isFahrenheit
})