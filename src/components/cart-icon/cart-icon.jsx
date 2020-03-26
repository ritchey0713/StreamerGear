import React from "react"
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg"
import { toggleCartHidden } from "../../redux/cart/cartActions"

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon  className="shopping-icon"/>
    <span className="item-count">0</span>
  </div>
)

export default connect(undefined, {
  toggleCartHidden
})(CartIcon)