import {
    SET_DARKMODE
} from '../actions'

const initialState = '';

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DARKMODE:
            return action.payload;
        default:
            return state
    }
}
export default reducer;