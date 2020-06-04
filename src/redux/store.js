import { createStore, applyMiddleware } from "redux"

// logger is middleware
import logger from "redux-logger"

import rootReducer from "./root-reducer"

//set middleware
const middlewares = [logger]

//make a store
//applyMiddleware returns sth
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
