import { combineReducers } from "redux"

import { persistReducer } from "redux-persist"

//local storage
//tell persistReducer that I use local storage
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import directoryReducer from "./directory/directory.reducer"
import shopReducer from "./shop/shop.reducer"

//config that redux-persist use
const persistConfig = {
  //start from the root to start storing
  key: "root",

  storage,
  //contains reducer to store
  //user is persited by firebase, so
  whitelist: ["cart"]
}

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// })

//I have to wrap inside of persist reducer call
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)
