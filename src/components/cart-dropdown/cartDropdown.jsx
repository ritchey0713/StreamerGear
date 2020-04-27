import React from 'react'
import { connect } from 'react-redux'
//gives access to the history props
import { withRouter } from "react-router-dom"

import CustomButton from "../custom-button/CustomButton"
import CartItem from '../cart-item/cartItem'
import { selectCartItems } from "../../redux/cart/cartSelectors"
import { toggleCartHidden } from "../../redux/cart/cartActions"
import { createStructuredSelector } from 'reselect'
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from "./cartDropDown.styles"

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        (cartItems.map(item => 
          <CartItem key={item.id} item={item} />
        )
        ):(
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>

        )
      }
    </CartItemsContainer>
    <CustomButton onClick={ () => {
      history.push("/checkout")
      toggleCartHidden()
      } }>GO TO CHECKOUT</CustomButton>
    
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, {
  toggleCartHidden
})(CartDropDown))