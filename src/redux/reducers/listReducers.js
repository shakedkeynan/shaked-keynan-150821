import {
    ADD_ITEM,
    REMOVE_ITEM
} from '../actions'

const initialState = {
    items: [],
};

function manageList(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            var isExist = false;
            state.items.forEach(i => {
                if (i.key === action.payload.key) {
                    isExist = true;
                }
            })
            return isExist ? { items: [...state.items] } : { items: [...state.items, action.payload] };

        case REMOVE_ITEM:
            var isExist = false;
            state.items.forEach(i => {
                if (i.key === action.payload.key) {
                    isExist = true;
                }
            })
            if (isExist) {
                let a = state.items.filter(function (ele) {
                    return ele.key != action.payload.key;
                });
                return { items: a }
            }
            else {
               return { items: state.items }
            }


        default:
            return state
    }
}
export default manageList;