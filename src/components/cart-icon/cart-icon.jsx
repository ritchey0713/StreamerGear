import React from "react"
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg"
import { toggleCartHidden } from "../../redux/cart/cartActions"
import { selectCartItemsCount } from "../../redux/cart/cartSelectors"
import { createStructuredSelector } from 'reselect'

import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from "./cartIcon.styles"

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    
    <ShoppingIconContainer>
      <ShoppingIcon/>
    </ShoppingIconContainer>

    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
)

//bad for performance, gets ran every time state changes
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, {
  toggleCartHidden
})(CartIcon)