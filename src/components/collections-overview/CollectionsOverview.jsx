import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors"
import CollectionPreview from "../collection-preview/collection-preview"
import { CollectionsOverviewContainer } from "./CollectionsOverview.styles"

const CollectionsOverview = ({ shop }) => (
  <CollectionsOverviewContainer>
    {
      shop.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={ id } { ...otherCollectionProps }/>
        ))
    }
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  shop: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)