import { createSelector } from "reselect"

const selectShop = state => state.shop

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  collections => Object.keys(collections).map(key => collections[key])
)

// export function, taking in external data to get proper collection 
export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectShopItems],
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    collections => collections[collectionUrlParam]
  )
)