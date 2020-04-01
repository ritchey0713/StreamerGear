import React from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {selectShopItems} from "../../redux/shop/shopSelectors"
import CollectionPreview from '../../components/collection-preview/collection-preview'

const ShopPage = ({ shop }) => (
      <div className='shop-page'>
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

export default connect(mapStateToProps)(ShopPage)