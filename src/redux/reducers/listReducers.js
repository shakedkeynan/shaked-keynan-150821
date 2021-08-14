import {
    ADD_ITEM,
} from '../actions'

const initialState = {
    items: [],
};

function manageList(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            console.log(state)
            console.log(state.items)
            var isExist = false;
            state.items.forEach(i => {
                if (i.includes(action.payload[0])) {
                    isExist = true;

                }
            })
            return isExist ? { items: state.items } : { items: [...state.items, action.payload] };


        default:
            return state
    }
}
export default manageList;