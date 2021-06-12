const initialState = {
    grabbedKey: false
}

const SET_KEY = 'SET_KEY'

export function setKey (grab) {
    return {
        type: SET_KEY,
        payload: grab
    }
}

export default function keyReducer(state = initialState, action) {
    switch(action.type){
        case SET_KEY:
            return {...state, grabbedKey: action.payload}
        default:
            return {...state}
    }
}