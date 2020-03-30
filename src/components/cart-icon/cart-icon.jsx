import React from "react"
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg"
import { toggleCartHidden } from "../../redux/cart/cartActions"
import { selectCartItemsCount } from "../../redux/cart/cartSelectors"
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon  className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
  </div>
)


//bad for performance, gets ran every time state changes
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, {
  toggleCartHidden
})(CartIcon)