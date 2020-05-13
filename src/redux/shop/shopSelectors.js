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
// when passing outside args you must pass state inside of the mapstatetoprops call
export const selectCollection = collectionUrlParam => {
  return createSelector(
    [selectShopItems],
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    items => {
     return items ? items[collectionUrlParam] : null
    }
  )

}


export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !shop.items
)
  