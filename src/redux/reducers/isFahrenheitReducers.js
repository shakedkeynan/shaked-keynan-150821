import {
    SET_ISFAHRENHEIT
} from '../actions'

const initialState = false;

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ISFAHRENHEIT:
            return action.payload;
        default:
            return state
    }
}
export default reducer;