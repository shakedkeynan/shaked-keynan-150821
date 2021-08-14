import {
    SET_LOCATION,
} from '../actions'

const initialState = '';

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOCATION:
            return action.payload;

        default:
            return state
    }
}
export default reducer;