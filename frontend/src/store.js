import { createStore , combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension' 

//create reducer
const reducer = combineReducers({})

//define initState
const initialState= {}

// if we want to add a new middleware, just pass it in the array
const middleware = [thunk]

//create the store
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store