import React from 'react'
import { connect } from 'react-redux'
//gives access to the history props
import { withRouter } from "react-router-dom"

import CustomButton from "../custom-button/CustomButton"
import CartItem from '../cart-item/cartItem'
import { selectCartItems } from "../../redux/cart/cartSelectors"
import { createStructuredSelector } from 'reselect'

const CartDropDown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
        (cartItems.map(item => 
          <CartItem key={item.id} item={item} />
        )
        ):(
          <span className="empty-message">Your cart is empty</span>

        )
      }
    </div>
    <CustomButton onClick={ () => history.push("/checkout") }>GO TO CHECKOUT</CustomButton>
    
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))