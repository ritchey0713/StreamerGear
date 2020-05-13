import { createSelector } from "reselect"

const selectShop = state => state.shop

export const selectShopItems = createSelector(
  [selectShop],
  shop => {
    // we get .items from shop, which is reducer state
    console.log(shop, "SHOPPPYYY")
    return shop.items
  }
)

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  items => items ? Object.keys(items).map(key => items[key]) : []
)

// export function, taking in external data to get proper collection 
export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectShopItems],
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    items => items ? items[collectionUrlParam] : null
  )
)

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)
  