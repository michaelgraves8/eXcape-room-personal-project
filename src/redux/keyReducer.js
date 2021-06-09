const initialState = {
    key: false
}

const SET_KEY = 'SET_KEY'

export function setKey () {
    return {
        type: SET_KEY,
        payload: true
    }
}

export default function keyReducer(state = initialState, action) {
    switch(action.type){
        case SET_KEY:
            return {...state, uselever: action.payload}
        default:
            return {...state}
    }
}