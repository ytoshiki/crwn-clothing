import { createSelector } from "reselect"

//input selector, takes just cart object off the entire state object
const selectCart = state => state.cart

//output selector,
export const selectCartItems = createSelector([selectCart], cart => cart.cartItems)

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden)

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0))

export const selectCartTotal = createSelector([selectCartItems], cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0))
