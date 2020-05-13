import ShopActionTypes from "./shop.types"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase"


export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections")
    dispatch(fetchCollectionsStart())

    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
        //updateCollections(collectionsMap)
      })
      .catch(
        error => dispatch(fetchCollectionsError(error.message)) 
      )
  }
}

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsError = (msg) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  paylaod: msg
})
