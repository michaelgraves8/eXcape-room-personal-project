const initialState = {
    lever: false
}

const SET_LEVER = 'SET_LEVER'

export function setLever () {
    return {
        type: SET_LEVER,
        payload: true
    }
}

export default function leverReducer(state = initialState, action) {
    switch(action.type){
        case SET_LEVER:
            return {...state, uselever: action.payload}
        default:
            return {...state}
    }
}