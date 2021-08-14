/*
* action types
*/
export const ADD_ITEM = 'ADD_ITEM'
export const SET_LOCATION = 'SET_LOCATION'
/*
* action creators
*/
export function addItem(text) {
 return { type: ADD_ITEM, payload: text }
}

export function setLocation(location) {
    return { type: SET_LOCATION, payload: location }
   }