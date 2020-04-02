import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectShopItems } from "../../redux/shop/shopSelectors"
import CollectionPreview from "../collection-preview/collection-preview"

const CollectionsOverview = ({ shop }) => (
  <div className="collections-overview">
    {
      shop.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={ id } { ...otherCollectionProps }/>
        ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  shop: selectShopItems
})

export default connect(mapStateToProps)(CollectionsOverview)