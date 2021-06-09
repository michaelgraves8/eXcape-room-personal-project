import {createStore, combineReducers} from 'redux'
import authReducer from './authReducer'
import leverReducer from './leverReducer'
import keyReducer from './keyReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    lever: leverReducer,
    key: keyReducer
})

export default createStore(rootReducer)