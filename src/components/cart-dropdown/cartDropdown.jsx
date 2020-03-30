import React from 'react'
import { connect } from 'react-redux'

import CustomButton from "../custom-button/CustomButton"
import CartItem from '../cart-item/cartItem'
import { selectCartItems } from "../../redux/cart/cartSelectors"

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown)