import CartActionTypes from "./cart.types"
import { addItemToCart, removeItemFromCart } from "./cart.utils"

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // spead in all our our array values and additional values appear in the end of array
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        // spead in all our our array values and additional values appear in the end of array
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        // spead in all our our array values and additional values appear in the end of array
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer
