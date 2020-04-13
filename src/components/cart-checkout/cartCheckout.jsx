import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from "../../redux/cart/cartSelectors"
import CheckoutItem from "../checkout-item/checkout-item"
import StripeCheckoutButton from "../stripe-button/StripeButton"
import { ElementsConsumer } from "@stripe/react-stripe-js"


const CartCheckoutPage = ({cartItems, total, stripe}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item =>
          <CheckoutItem cartItem={item} key={item.id}/>
        )
      }

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        * Please use following test credit card info *
        <br />
        Card Number: 4242 4242 4242 4242 - ex: 01/21 CVV: 123
        <br />
      </div>
        <StripeCheckoutButton price={total}/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CartCheckoutPage)