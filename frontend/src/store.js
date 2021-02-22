import { createStore , combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension' 
import {productListReducer} from './reducers/productReducers'

//create reducer
const reducer = combineReducers({
    // productList will be part of the state
    productList:productListReducer,
})

//define initState
const initialState= {}

// if we want to add a new middleware, just pass it in the array
const middleware = [thunk]

//create the store
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store