import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from "../../redux/cart/cartSelectors"
import CheckoutItem from "../checkout-item/checkout-item"
import StripeCheckoutButton from "../stripe-button/StripeButton"

import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TotalContainer, TestWarningContainer } from "./cartCheckout.styles"

const CartCheckoutPage = ({cartItems, total, stripe}) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>

        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>

      </CheckoutHeaderContainer>
      {
        cartItems.map(item =>
          <CheckoutItem cartItem={item} key={item.id}/>
        )
      }

      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>
      <TestWarningContainer>
        * Please use following test credit card info *
        <br />
        Card Number: 4242 4242 4242 4242 - ex: 01/21 CVV: 123
        <br />
      </TestWarningContainer>

        <StripeCheckoutButton price={total}/>
        
    </CheckoutPageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CartCheckoutPage)