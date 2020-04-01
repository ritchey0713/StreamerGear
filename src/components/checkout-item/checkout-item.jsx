import React from 'react'
import { connect } from 'react-redux'
import { removeItem, clearItem, addItem } from "../../redux/cart/cartActions"

const CheckoutItem = ({ cartItem, removeItem, clearItem, addItem }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return(
    <div className="checkout-item">
      <div className="image-container">
        <img src={ imageUrl } alt="item"/>
      </div>
      <span className="name">{ name }</span>
      <span className="quantity">
        <div className="arrow" onClick={ () => removeItem(cartItem) }>&#10094;</div>
        <span className="value">{ quantity }</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{ price }</span>
      <div className="remove-button" onClick={ () => clearItem(cartItem) }>&#10008;</div>
    </div>
  )

}

export default connect(undefined, {
  clearItem,
  addItem,
  removeItem
})(CheckoutItem)