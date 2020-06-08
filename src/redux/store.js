//need Middleware for actions to get dispatched and catch them and display them
import { createStore, applyMiddleware } from "redux"

//allow browser to cache our store depending on config
import { persistStore } from "redux-persist"

// logger is middleware
import logger from "redux-logger"

import rootReducer from "./root-reducer"

//set middleware
const middlewares = [logger]

//make a store
//applyMiddleware returns sth
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

//persisted version of the store
export const persistor = persistStore(store)

export default { store, persistor }
