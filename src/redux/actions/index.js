/*
* action types
*/
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const SET_LOCATION = 'SET_LOCATION'
export const SET_DARKMODE = 'SET_DARKMODE'
export const SET_ISFAHRENHEIT = 'SET_ISFAHRENHEIT'

/*
* action creators
*/
export function addItem(text) {
    return { type: ADD_ITEM, payload: text }
}
export function removeItem(text) {
    return { type: REMOVE_ITEM, payload: text }
}
export function setLocation(location) {
    return { type: SET_LOCATION, payload: location }
}
export function setdarkmode(isOn) {
    return { type: SET_DARKMODE, payload: isOn }
}
export function setisfahrenheit(isfahrenheit) {
    return { type: SET_ISFAHRENHEIT, payload: isfahrenheit }
}