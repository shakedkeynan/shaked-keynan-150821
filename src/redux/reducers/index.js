import { combineReducers } from 'redux'

import list from './listReducers';
import location from './locationReducers';

export default combineReducers({
    list,
    location,
})