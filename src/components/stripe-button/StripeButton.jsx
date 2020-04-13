import React from "react"
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price, stripe, elements }) => {
  const stripePrice = price * 100
  const publishKey = 'pk_test_b2T1okYCs7N8suRfyieZ12aX00UFOXSVlF'

  const onToken = token => {
    console.log(token)
    alert("Payment success!")
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Stream Gear"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />

    
  )

}

export default StripeCheckoutButton