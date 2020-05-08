import ShopActionTypes from "./shop.types"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase"


export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections")
    dispatch(fetchCollectionsStart())

    collectionRef.get().then(async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
        //updateCollections(collectionsMap)
      })
  }
}

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})
