import { createSelector } from "reselect"

const selectShop = state => state.shop

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.items
)

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  items => Object.keys(items).map(key => items[key])
)

// export function, taking in external data to get proper collection 
export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectShopItems],
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    items => items[collectionUrlParam]
  )
)
  