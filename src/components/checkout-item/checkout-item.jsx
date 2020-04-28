import React from 'react'
import { connect } from 'react-redux'
import { removeItem, clearItem, addItem } from "../../redux/cart/cartActions"
import { CheckoutItemContainer, ImageContainer, DetailsContainer, ArrowContainer, ValueContainer, RemoveButtonContainer } from "./CheckoutItem.styles"

const CheckoutItem = ({ cartItem, removeItem, clearItem, addItem }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={ imageUrl } alt="item"/>
      </ImageContainer>

      <DetailsContainer>{ name }</DetailsContainer>

      <DetailsContainer quantityComp>
        <ArrowContainer onClick={ () => removeItem(cartItem) }>&#10094;</ArrowContainer>
        <ValueContainer>{ quantity }</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
      </DetailsContainer>

      <DetailsContainer>{ price }</DetailsContainer>

      <RemoveButtonContainer onClick={ () => clearItem(cartItem) }>&#10008;</RemoveButtonContainer>
      
    </CheckoutItemContainer>
  )

}

export default connect(undefined, {
  clearItem,
  addItem,
  removeItem
})(CheckoutItem)