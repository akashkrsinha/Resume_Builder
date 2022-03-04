import {combineReducers} from 'redux'
import ContactReducer from './contactReducer.js'
import experienceReducer from './experienceReducer'
import educationReducer from './educationReducer'
import skillReducer from './skillReducer'
import summaryReducer from './summaryReducer'
import finalReducer from './finalReducer.js'
import userReducer from './userReducer.js'

const rootReducer = combineReducers(
    {
        ContactReducer,
        experienceReducer,
        educationReducer,
        skillReducer,
        summaryReducer,
        finalReducer,
        userReducer
    } 
)

export default rootReducer;