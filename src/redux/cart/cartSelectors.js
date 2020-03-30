//memoize state
// stops unneeded rerenders

import { createSelector } from "reselect"


// get state from passing state into selectcartitems or selectcartitemscount 
const selectCart = state => state.cart


//pass back state as we need it, memoize happens, needs 2 args, a collection, and a "what to do with each from collection"
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
  cartItems.reduce(
    (acc, cartItem) => 
      acc + cartItem.quantity, 
  0)
)