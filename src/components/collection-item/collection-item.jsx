import React from "react"
import { connect } from 'react-redux'
import CustomButton from "../custom-button/CustomButton"
import { addItem } from "../../redux/cart/cartActions"

import { CollectionItemContainer, CollectionFooterContainer, ImageContainer, InfoCollection } from "./CollectionItem.styles"

const CollectionItem = ({ item, addItem }) => {
  const {name, price, imageUrl } = item

  return(
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <InfoCollection>{ name }</InfoCollection>
          <InfoCollection>{ price }</InfoCollection>
        </CollectionFooterContainer>
        <CustomButton onClick={() => addItem(item)} inverted={true} itemPageButton={true}>ADD TO CART</CustomButton>
    </CollectionItemContainer>
  )
}

export default connect(undefined, {
  addItem
})(CollectionItem)