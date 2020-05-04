import React from 'react'
import { connect } from "react-redux"
import { selectCollection } from "../../redux/shop/shopSelectors"

import CollectionItem from "../../components/collection-item/collection-item"
import { TitleContainer, ItemsContainer } from "./Collection.styles"

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection
  return(
  <div>
    <TitleContainer>{ title }</TitleContainer>
    <ItemsContainer>
      {
        items.map((item) => (
          <CollectionItem  key={item.id} item={item} />
        ))
      }
    </ItemsContainer>
  </div>

  )
}

const mapStateToProps = (state, ownProps) => ({
  // if passing data to func in a selector, must also pass state in secondary call
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)