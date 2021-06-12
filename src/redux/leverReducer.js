const initialState = {
    lever: false
}

const SET_LEVER = 'SET_LEVER'

export function setLever (flip) {
    return {
        type: SET_LEVER,
        payload: flip
    }
}

export default function leverReducer(state = initialState, action) {
    switch(action.type){
        case SET_LEVER:
            return {...state, lever: action.payload}
        default:
            return {...state}
    }
}