import React from "react"

import { CartImgContainer, CartItemContainer, ItemDetailsContainer, ItemPriceContainer, ItemNameContainer } from "./CartItem.styles"

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartImgContainer src={imageUrl} alt="item"/>
    
    <ItemDetailsContainer>

      <ItemNameContainer>{name}</ItemNameContainer>
      <ItemPriceContainer>{quantity} x ${price}</ItemPriceContainer>
      
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem
