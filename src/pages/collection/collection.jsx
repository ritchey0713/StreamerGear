import React from 'react'
import { connect } from "react-redux"
import { selectCollection } from "../../redux/shop/shopSelectors"

import CollectionItem from "../../components/collection-item/collection-item"

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection
  return(
  <div>
    <h2 className="title">{ title }</h2>
    <div className="items">
      {
        items.map((item) => (
          <CollectionItem  key={item.id} item={item} />
        ))
      }
    </div>
  </div>

  )
}

const mapStateToProps = (state, ownProps) => ({
  // if passing data to func in a selector, must also pass state in secondary call
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)